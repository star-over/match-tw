import Image from "next/image";
import logoImage from "../public/logo/main_logo.png";

export const Title = () => (
  <div >
    <h1 className="sr-only">Tailwind color matching</h1>
    <Image
      className="mt-12 mb-4 mx-auto container"
      src={logoImage}
      alt="logo sign"
      placeholder="empty"
    />

    <p
      className="text-xs sm:text-sm px-4 mx-auto text-center max-w-lg text-balance">
      Tailwind Colour Matching is a web-based tool that can help you find the closest color from the Tailwind palette. We use different algorithms to find the nearest color, and although they may give different results, the best way to determine the closest color is to trust your eyes.

    </p>
  </div>
);
