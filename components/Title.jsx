import Image from "next/image";
import logoImage from "../public/logo/main_logo.png";

export function Title() {
  return (
    <div className="container mt-8">
      <h1 className="sr-only">Tailwind colors matching</h1>
      <Image
        className=""
        src={logoImage}
        alt="logo sign"
        placeholder="empty"
      />

      <p
        className="text-xs sm:text-sm px-4 mx-auto text-center mt-4 text-balance">
        Tailwind Colour Matching is a web-based tool that can help you find the closest color from the Tailwind palette.
        We use different algorithms to find the nearest color, and although they may give different results, the best way to determine the closest color is to trust your eyes.
      </p>
    </div>
  );
}
