"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { poppr } from "./state";
import { useModalState } from "./hooks";
import { ModalIcons } from "./assets";
import type { ExternalModal, ModalT } from "./types";
import "./styles.css";

const PopprModal = () => {
  const modal = useModalState();

  const handleClose = () => {
    modal?.onClose?.();
    poppr.close();
  };

  return (
    <AnimatePresence>
      {modal && (
        <div className="poppr-overlay" onClick={handleClose}>
          <motion.div
            className="poppr-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header */}
            <div className="poppr-header">
              {modal.icon ?? ModalIcons[modal.type ?? "default"]}
              {modal.title && <h2>{modal.title}</h2>}
            </div>

            {/* Content */}
            <div className="poppr-content">{modal.content}</div>

            {/* Buttons */}
            <div className="poppr-buttons">
              {modal.cancelAction && (
                <button
                  className="poppr-button cancel"
                  onClick={modal.cancelAction.onClick}
                >
                  {modal.cancelAction.label}
                </button>
              )}
              {modal.confirmAction && (
                <button
                  className="poppr-button confirm"
                  onClick={modal.confirmAction.onClick}
                >
                  {modal.confirmAction.label}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export { poppr, PopprModal };
export type { ExternalModal, ModalT };
