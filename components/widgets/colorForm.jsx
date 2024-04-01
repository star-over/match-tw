import Link from "next/link";
import { InputColorText } from "./InputColorText";
import { AlgorithmWidget } from "./algorithmWidget";
import { SpotCountWidget } from "./spotCountWidget";

export function ColorForm() {
  // todo: make it with save state: algo and spot count
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

  const sample1 = makeColorLink("tan");
  const sample2 = makeColorLink("#748af9");
  const sample3 = makeColorLink("rgb(173, 250, 77)");
  const sample4 = makeColorLink("color(display-p3 1 0 0.4)");

  return (
    <div className="bg-gray-200 mx-auto max-w-xl min-w-min mt-4 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl mb-2 text-gray-600">Find closest color</h3>
      <p className="m-2 text-gray-600 text-sm text-balance">
        The color can be specified as a word such as&nbsp;
        {sample1}
        , or in hex&nbsp;
        {sample2}
        &#160;format, or in CSS format&#160;
        {sample3}
        {" "}
        or in new format
        {" "}
        {sample4}
      </p>

      {/* --- Toolbar --- */}
      <div className="flex gap-1.5">
        <AlgorithmWidget />
        <SpotCountWidget />
      </div>
      <InputColorText />
    </div>
  );
}
