import { useState } from "react";
import { Copy, Check } from "lucide-react";

export const Install = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install poppr");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold">Installation</h1>
      <div className="bg-stone-100 p-2 rounded-md flex flex-row justify-between items-center">
        <code>npm install poppr</code>
        <button
          onClick={handleCopy}
          className="text-sm text-muted-foreground flex items-center cursor-pointer"
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

export default Install;
