import Link from "next/link";
import { GithubIcon, BinaryIcon, UserIcon } from "lucide-react";

export function Footer() {
  return (
    <div className="container flex items-center justify-center gap-4 my-10 font-semibold">

      {/* GITHUB */}
      <Link
        className="flex text-gray-500"
        href="https://github.com/star-over/match-tw"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon className="size-5" />&nbsp;Repository
      </Link>

      {/* Colorjs.io */}
      <Link
        className="flex text-gray-500"
        href="https://colorjs.io"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BinaryIcon className="size-5" />&nbsp;Core lib - colorjs.io
      </Link>

      {/* Telegram */}
      <Link
        className="flex text-gray-500"
        href="https://t.me/overstar"
        rel="noopener noreferrer"
        target="_blank"
      >
        <UserIcon className="size-5" />&nbsp;Contact
      </Link>
    </div>
  );
}