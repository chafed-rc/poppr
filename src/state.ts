import React from "react";
import type {
  ModalT,
  ExternalModal,
  PromiseModalData,
  PromiseT,
} from "./types";

let modalCounter = 1;

type ModalSubscriber = (modal: ModalT | null) => void;

class ModalObserver {
  private subscribers: ModalSubscriber[] = [];
  private modal: ModalT | null = null;

  subscribe = (subscriber: ModalSubscriber) => {
    this.subscribers.push(subscriber);
    // Immediately inform the subscriber of current modal
    subscriber(this.modal);

    return () => {
      const index = this.subscribers.indexOf(subscriber);
      if (index > -1) this.subscribers.splice(index, 1);
    };
  };

  publish = () => {
    this.subscribers.forEach((subscriber) => subscriber(this.modal));
  };

  open = (modal: ExternalModal & { content?: React.ReactNode }) => {
    const id = modal.id ?? modalCounter++;
    this.modal = {
      id,
      ...modal,
      isOpen: true,
    };
    this.publish();
    return id;
  };

  close = () => {
    this.modal = null;
    this.publish();
  };

  confirm = (
    content: React.ReactNode,
    onConfirm: () => void | Promise<void>,
    options?: Omit<ExternalModal, "id" | "content">
  ) => {
    const id = modalCounter++;

    this.modal = {
      id,
      content,
      isOpen: true,
      type: "confirm",
      confirmAction: {
        label: "Confirm",
        onClick: async () => {
          await onConfirm();
          this.close();
        },
      },
      cancelAction: {
        label: "Cancel",
        onClick: () => this.close(),
      },
      ...options,
    };

    this.publish();
    return id;
  };

  promise = async <T>(promise: PromiseT<T>, config: PromiseModalData<T>) => {
    if (config.loading) {
      this.open({
        ...config,
        content: config.loading,
        type: "info",
      });
    }

    const p = Promise.resolve(
      typeof promise === "function" ? promise() : promise
    );

    let result: ["resolve", T] | ["reject", unknown];

    const run = p
      .then(async (res) => {
        result = ["resolve", res];
        const successData =
          typeof config.success === "function"
            ? await config.success(res)
            : config.success;
        this.open({
          ...config,
          content:
            successData &&
            typeof successData === "object" &&
            "message" in successData
              ? successData.message
              : successData,
          type: "success",
        } as const);
      })
      .catch(async (err) => {
        result = ["reject", err];
        const errorData =
          typeof config.error === "function"
            ? await config.error(err)
            : config.error;
        this.open({
          ...config,
          content:
            errorData && typeof errorData === "object" && "message" in errorData
              ? errorData.message
              : errorData,
          type: "error" as const,
        });
      })
      .finally(() => {
        config.finally?.();
      });

    const unwrap = () =>
      new Promise<T>((resolve, reject) =>
        run
          .then(() =>
            result[0] === "resolve" ? resolve(result[1]) : reject(result[1])
          )
          .catch(reject)
      );

    return { unwrap };
  };

  getModal = () => this.modal;
}

export const ModalState = new ModalObserver();

// Core poppr API
const openModal = (content: React.ReactNode, config?: ExternalModal) => {
  const id = config?.id ?? modalCounter++;
  ModalState.open({
    id,
    content,
    isOpen: true,
    ...config,
  });
  return id;
};

export const poppr = Object.assign(openModal, {
  open: ModalState.open,
  confirm: ModalState.confirm,
  promise: ModalState.promise,
  close: ModalState.close,
  getModal: ModalState.getModal,
});
