'use client'

import { CopyIcon } from "lucide-react";
import { Button } from "./ui/button";

export function CopyButton({ text }) {
  return (
    <Button
      className="flex items-center group ml-6 text-lg font-mono "
      variant="ghost"
      size="xs"
      data-value={text}
      onClick={copyHandle}>
      {text}&nbsp;
      <CopyIcon
        className="size-4 invisible group-hover:visible"
        data-value={text} />
    </Button>);
}


function copyHandle({ target }) {
  const { value } = target.dataset;
  console.log(value);
  navigator.clipboard.writeText(value);
}
