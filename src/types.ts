import React from "react";

/** Types of modals you support (for styling, icon, intent, etc.) */
export type ModalTypes =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "confirm"
  | "loading";

/** A promise, or a function returning a promise */
export type PromiseT<Data = any> = Promise<Data> | (() => Promise<Data>);

/** Action button structure */
export interface ModalAction {
  label: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: React.CSSProperties;
}

/** Class overrides for modal styling */
export interface ModalClassnames {
  container?: string;
  header?: string;
  body?: string;
  footer?: string;
  confirmButton?: string;
  cancelButton?: string;
  icon?: string;
}

/** Modal position (optional — you can expand on this if needed) */
export type ModalPosition = "center" | "top" | "bottom";

/** The core structure of a modal */
export interface ModalT {
  id: number | string;
  isOpen?: boolean;
  title?: React.ReactNode;
  content?: React.ReactNode;
  type?: ModalTypes;
  icon?: React.ReactNode;
  confirmAction?: ModalAction;
  cancelAction?: ModalAction;
  onClose?: () => void;
  className?: string;
  classNames?: ModalClassnames;
  position?: ModalPosition;
  closeOnConfirm?: boolean;
}

/* ---------------------------------- */
/* PROMISE-BASED MODALS               */
/* ---------------------------------- */

export interface PromiseModalResult extends ExternalModal {
  message: React.ReactNode;
}

export type PromiseModalResultHandler<Data = any> =
  | PromiseModalResult
  | ((data: Data) => PromiseModalResult | Promise<PromiseModalResult>);

export type PromiseModalMessage<Data = any> =
  | string
  | React.ReactNode
  | ((
      data: Data
    ) => React.ReactNode | string | Promise<React.ReactNode | string>);

/** A cleaner version of what you pass to open a promise modal */
export type PromiseModalData<ModalData = any> = PromiseExternalModal & {
  loading?: string | React.ReactNode;
  success?:
    | PromiseModalMessage<ModalData>
    | PromiseModalResultHandler<ModalData>;
  error?: PromiseModalMessage | PromiseModalResultHandler;
  description?: PromiseModalMessage;
  finally?: () => void | Promise<void>;
};

/** Options you can configure globally or per-modal */
export interface ModalOptions {
  backdrop?: boolean;
  closeOnEsc?: boolean;
  closeOnBackdropClick?: boolean;
  classNames?: ModalClassnames;
  duration?: number;
  position?: ModalPosition;
}

/** Slimmed version of ModalT that gets passed into promise modals */
export type ExternalModal = Omit<ModalT, "id" | "content"> & {
  id?: string | number;
};

export type PromiseExternalModal = Omit<ExternalModal, "content">;
