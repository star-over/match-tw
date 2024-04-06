import { InputColorText } from "./InputColorText";
import { AlgorithmWidget } from "./algorithmWidget";
import { SpotCountWidget } from "./spotCountWidget";

export function ColorForm() {
  return (
    <div className="mx-auto mt-4 min-w-min max-w-xl rounded-lg bg-gray-200 p-4 shadow-lg">
      {/* --- Toolbar --- */}
      <div className="flex gap-1.5">
        <AlgorithmWidget />
        <SpotCountWidget />
      </div>
      <InputColorText />
    </div>
  );
}
