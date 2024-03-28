import Link from "next/link";
import { GithubIcon, BinaryIcon } from "lucide-react";
import { Spinner } from "../ui/spinner";

export function Footer() {
  return (
    <div className="container flex items-center justify-center gap-4 my-10 font-semibold">
      <Link
        className="flex text-gray-500"
        href="https://github.com/star-over/match-tw"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon className="size-5" />&nbsp;Repository
      </Link>
      <Link
        className="flex text-gray-500"
        href="https://colorjs.io"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BinaryIcon className="size-5" />&nbsp;Core Lib - "colorjs.io"
      </Link>
      <Spinner />
    </div>
  );
}
