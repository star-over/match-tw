import Image from "next/image";
import Link from "next/link";
import logoImage from "@/public/logo/main_logo.png";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../ui/accordion";

// todo: make it with save state: algo and spot count
export function Title() {
  const makeColorLink = (targetColor) => (
    <Link
      className="underline"
      href={
        {
          pathname: "/",
          query: { c: targetColor },
        }
      }
      scroll={false}
    >
      {targetColor}
    </Link>
  );

  const sample1 = makeColorLink("tomato");
  const sample2 = makeColorLink("#748af9");
  const sample3 = makeColorLink("rgb(173, 250, 77)");
  const sample4 = makeColorLink("color(display-p3 1 0 0.4)");

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
      <div
        className="mx-auto mt-4 max-w-xl text-balance px-4"
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="justify-center gap-2">
              <h1>
                {" Find the closest color from the "}
                <Link
                  className="underline"
                  href="https://tailwindcss.com/docs/customizing-colors"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" Tailwind palette."}
                </Link>
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                {" You can use different "}
                <Link
                  className="underline"
                  href="https://wikipedia.org/wiki/Color_difference"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  algorithms
                </Link>
                {" to find the closest color, and they may give different results."}
              </p>

              <p>
                {" The best way to determine the closest color is to trust your eyes."}
              </p>

              <p>
                {"The color can be specified as a word such as "}
                {sample1}
                {" or in hexadecimal "}
                {sample2}
                {" or in CSS "}
                {sample3}
                {" format or in new "}
                {sample4}
                {" format."}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
