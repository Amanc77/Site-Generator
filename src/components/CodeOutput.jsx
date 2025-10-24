import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Copy, Check, Code } from "lucide-react";
import { toast } from "sonner";

const CodeOutput = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy code");
    }
  };

  return (
    <Card className="p-6 shadow-lg border-border/50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Code className="w-5 h-5 text-primary" />
          Generated Code
        </h2>
        <Button onClick={handleCopy} variant="outline" size="sm">
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy Code
            </>
          )}
        </Button>
      </div>

      <div className="relative">
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm max-h-96">
          <code>{code}</code>
        </pre>
      </div>

      <p className="text-sm text-muted-foreground mt-4">
        Save this code as
        <code className="bg-muted px-2 py-1 rounded">index.html</code> and
        deploy it anywhere!
      </p>
    </Card>
  );
};

export default CodeOutput;
