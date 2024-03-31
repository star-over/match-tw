"use client";

import { CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function CopyButton({ text }) {
  const { toast } = useToast();

  function copyHandle({ target }) {
    const { value } = target.dataset;
    navigator.clipboard.writeText(value);

    toast({
      description: (
        <span>
          Value&nbsp;
          <strong>{value}</strong>
          &nbsp;is copied to clipboard
        </span>),
      duration: 3000,
    });
  }

  return (
    <Button
      className="flex items-center group ml-6 text-lg font-mono hover:scale-105"
      variant="ghost"
      size="xs"
      data-value={text}
      onClick={copyHandle}
    >
      {text}
      &nbsp;
      <CopyIcon
        className="size-4 invisible group-hover:visible"
        data-value={text}
      />
    </Button>
  );
}
