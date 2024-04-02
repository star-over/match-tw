import Image from "next/image";
import Link from "next/link";
import logoImage from "@/public/logo/main_logo.png";

export function Title() {
  return (
    <div className="container mt-8">
      <h1 className="sr-only">Find closest tailwind color</h1>
      <Image
        src={logoImage}
        alt="logo sign"
        priority
        quality={75}
        placeholder="empty"
      />
      <h2
        className="text px-4 mx-auto max-w-4xl text-center mt-4 text-balance"
      >
        {"Tailwind Colour Matching is a web-based tool "}
        {"that can help you find the closest color from the "}
        <Link
          className="underline"
          href="https://tailwindcss.com/docs/customizing-colors"
          rel="noopener noreferrer"
          target="_blank"
        >
          {"Tailwind palette. "}
        </Link>
        {"You can use different "}
        <Link
          className="underline"
          href="https://wikipedia.org/wiki/Color_difference"
          rel="noopener noreferrer"
          target="_blank"
        >
          algorithms
        </Link>
        {" to find the nearest color, "}
        {"and although they may give different results. "}
        {"The best way to determine the closest color is to trust your eyes. "}
      </h2>
    </div>
  );
}
