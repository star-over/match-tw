import Image from "next/image";
import logoImage from "../public/logo/main_logo.png"

export const Title = () => (
  <div >
    <h1 className="sr-only">Tailwind color matching</h1>
    <Image
      className="mt-12 mb-4 mx-auto container"
      src={logoImage}
      alt="logo sign"
      placeholder="blur"
      />

    <p
    className="text-xs sm:text-sm px-4 mx-auto text-center max-w-lg">
      Tailwind Colour Matching is a web-based tool for finding the nearest colour from the Tailwind palette. Different algorithms can be used to find the nearest colour, and although different algorithms give different results, the best tool will be your eyes.
    </p>
  </div>
);
