import Link from "next/link";
import { GithubIcon, BinaryIcon, UserIcon } from "lucide-react";

export function Footer() {
  return (
    <div className="container my-10 items-center justify-center gap-4 font-semibold max-md:flex-col md:flex">

      {/* GITHUB */}
      <Link
        className="flex justify-center text-gray-500"
        href="https://github.com/star-over/match-tw"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon className="size-5" />
        &nbsp;Repository
      </Link>

      {/* Colorjs.io */}
      <Link
        className="flex justify-center text-gray-500"
        href="https://colorjs.io"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BinaryIcon className="size-5" />
        &nbsp;Core lib - colorjs.io
      </Link>

      {/* Telegram */}
      <Link
        className="flex justify-center text-gray-500"
        href="https://t.me/overstar"
        rel="noopener noreferrer"
        target="_blank"
      >
        <UserIcon className="size-5" />
        &nbsp;Contact
      </Link>
    </div>
  );
}
