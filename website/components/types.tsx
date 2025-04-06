"use client";

import { useState } from "react";
import { poppr } from "poppr";
import { Check, Copy } from "lucide-react";

const modals = [
  {
    label: "Default",
    code: `poppr("This is a default modal", { cancelAction: { label: "Cancel", onClick: () => poppr.close() } });`,
    onClick: () =>
      poppr("This is a default modal", {
        cancelAction: {
          label: "Cancel",
          onClick: () => poppr.close(),
        },
      }),
  },
  {
    label: "Success",
    code: `poppr("Success!", { type: "success", cancelAction: { label: "Cancel", onClick: () => poppr.close() } });`,
    onClick: () =>
      poppr("Success!", {
        type: "success",
        cancelAction: {
          label: "Cancel",
          onClick: () => poppr.close(),
        },
      }),
  },
  {
    label: "Info",
    code: `poppr("Heads up!", { type: "info", cancelAction: { label: "Cancel", onClick: () => poppr.close() } });`,
    onClick: () =>
      poppr("Heads up!", {
        type: "info",
        cancelAction: {
          label: "Cancel",
          onClick: () => poppr.close(),
        },
      }),
  },
  {
    label: "Warning",
    code: `poppr("Careful!", { type: "warning", cancelAction: { label: "Cancel", onClick: () => poppr.close() } });`,
    onClick: () =>
      poppr("Careful!", {
        type: "warning",
        cancelAction: {
          label: "Cancel",
          onClick: () => poppr.close(),
        },
      }),
  },
  {
    label: "Error",
    code: `poppr("Something went wrong!", { type: "error", cancelAction: { label: "Cancel", onClick: () => poppr.close() } });`,
    onClick: () =>
      poppr("Something went wrong!", {
        type: "error",
        cancelAction: {
          label: "Cancel",
          onClick: () => poppr.close(),
        },
      }),
  },
  {
    label: "Confirm",
    code: `poppr.confirm("Delete this item?", async () => alert("Deleted!"), { cancelAction: { label: "Cancel", onClick: () => poppr.close() } });`,
    onClick: () =>
      poppr.confirm("Delete this item?", async () => alert("Deleted!"), {
        cancelAction: {
          label: "Cancel",
          onClick: () => poppr.close(),
        },
      }),
  },
  {
    label: "Load & Update Modal",
    code: `const id = poppr("Loading user data...", {
    type: "loading",
    cancelAction: {
      label: "Cancel",
      onClick: () => poppr.close(),
    },
  });
  
  try {
    const result = await new Promise((resolve, reject) =>
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
  }`,
    onClick: async () => {
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
    },
  },
];

export const ModalShowcase = () => {
  const [selected, setSelected] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg font-semibold">Explore Modal Types</h2>

      <div className="flex flex-wrap gap-2">
        {modals.map((modal, i) => (
          <button
            key={modal.label}
            onClick={() => {
              setSelected(i);
              modal.onClick?.(); // Add optional chaining to handle undefined onClick
            }}
            className="text-sm px-4 py-2 rounded-md border bg-white hover:bg-neutral-100 transition"
          >
            {modal.label}
          </button>
        ))}
      </div>

      {/* Code Preview (Always Visible) */}
      <div className="relative mt-2">
        <pre className="bg-zinc-100 text-sm font-mono p-4 rounded-md whitespace-pre-wrap">
          <code>{modals[selected].code}</code>
        </pre>
        <button
          onClick={() => handleCopy(modals[selected].code)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-black"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ModalShowcase;
