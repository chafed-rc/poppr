"use client";

import React from "react";
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
    <>
      {modal && (
        <div className="poppr-overlay" onClick={handleClose}>
          <div
            className="poppr-modal animate-fade-in"
            onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
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
          </div>
        </div>
      )}
    </>
  );
};

export { poppr, PopprModal };
export type { ExternalModal, ModalT };
