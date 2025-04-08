"use client";

import { useState } from "react";
import { poppr } from "poppr";
import { Button } from "@/components/ui/button";

const ModalShowcase = () => {
  const handleDefault = () => {
    poppr("This is a default modal", {
      cancelAction: { label: "Cancel", onClick: () => poppr.close() },
    });
  };

  const handleSuccess = () => {
    poppr("Success!", {
      type: "success",
      cancelAction: { label: "Cancel", onClick: () => poppr.close() },
    });
  };

  const handleInfo = () => {
    poppr("Heads up!", {
      type: "info",
      cancelAction: { label: "Cancel", onClick: () => poppr.close() },
    });
  };

  const handleWarning = () => {
    poppr("Careful!", {
      type: "warning",
      cancelAction: { label: "Cancel", onClick: () => poppr.close() },
    });
  };

  const handleError = () => {
    poppr("Something went wrong!", {
      type: "error",
      cancelAction: { label: "Cancel", onClick: () => poppr.close() },
    });
  };

  const handleConfirm = () => {
    poppr.confirm("Delete this item?", async () => alert("Deleted!"), {
      cancelAction: { label: "Cancel", onClick: () => poppr.close() },
    });
  };

  const handleAsync = async () => {
    const id = poppr("Loading user data...", {
      type: "loading",
      cancelAction: {
        label: "Cancel",
        onClick: () => poppr.close(),
      },
    });

    try {
      const result = await new Promise<string>((resolve, reject) =>
        setTimeout(() => {
          const ok = Math.random() > 0.5;
          ok
            ? resolve("User data loaded successfully.")
            : reject("Failed to load user.");
        }, 3000)
      );

      poppr(result, {
        id,
        type: "success",
        title: "Success",
        confirmAction: {
          label: "Awesome",
          onClick: () => poppr.close(),
        },
      });
    } catch (err) {
      poppr(String(err), {
        id,
        type: "error",
        title: "Error",
        cancelAction: {
          label: "Close",
          onClick: () => poppr.close(),
        },
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={handleDefault}>Show Default Modal</Button>
      <Button onClick={handleSuccess}>Show Success Modal</Button>
      <Button onClick={handleInfo}>Show Info Modal</Button>
      <Button onClick={handleWarning}>Show Warning Modal</Button>
      <Button onClick={handleError}>Show Error Modal</Button>
      <Button onClick={handleConfirm}>Show Confirm Modal</Button>
      <Button onClick={handleAsync}>Show Async Modal</Button>
    </div>
  );
};

export default ModalShowcase;
