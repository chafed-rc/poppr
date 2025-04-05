import { useEffect, useState } from "react";
import { ModalState } from "./state";
import type { ModalT } from "./types";

/**
 * Internal hook used to subscribe to current modal state.
 * Not exposed to consumers of the `poppr` API.
 */
export const useModalState = () => {
  const [modal, setModal] = useState<ModalT | null>(ModalState.getModal());

  useEffect(() => {
    const unsubscribe = ModalState.subscribe(setModal);
    return () => unsubscribe();
  }, []);

  return modal;
};
