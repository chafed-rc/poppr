import { useState } from "react";
import { Copy, Check } from "lucide-react";

const usageCode = `import { poppr, PopprModal } from "poppr";

// ...

export default function App() {
  return (
    <>
      <PopprModal />
      <button onClick={() => poppr("Hello from Poppr!")}>
        Open Modal
      </button>
    </>
  );
}`;

export const Usage = () => {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopy = (text: string, setCopied: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-lg">Usage</h1>
      <p className="text-muted-foreground text-sm">
        Simply render the <code>PopprModal</code> component once in your app,
        then use the <code>poppr()</code> function anywhere to trigger modals
        with ease.
      </p>

      {/* Example usage block */}
      <div className="relative">
        <pre className="bg-stone-100 p-4 rounded-md text-sm overflow-x-auto font-mono whitespace-pre-wrap">
          <code>{usageCode}</code>
        </pre>
        <button
          onClick={() => handleCopy(usageCode, setCopiedCode)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition cursor-pointer"
        >
          {copiedCode ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Usage;
