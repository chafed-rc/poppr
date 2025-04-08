"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function Pre({
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  const [copied, setCopied] = useState(false);

  // Get the raw code string from inside the <code> block
  const code =
    typeof children === "object" &&
    children !== null &&
    "props" in children &&
    typeof (children as { props: { children?: unknown } }).props?.children ===
      "string"
      ? (children as { props: { children: string } }).props.children
      : "";

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="relative w-full max-w-[90vw] md:max-w-2xl group">
      <pre
        className="bg-zinc-900 text-zinc-100 rounded-lg p-4 overflow-x-auto text-sm mb-6"
        {...props}
      >
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 rounded bg-zinc-800 text-white hover:bg-zinc-700 transition-opacity opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}
