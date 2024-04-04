import { InputColorText } from "./InputColorText";
import { AlgorithmWidget } from "./algorithmWidget";
import { SpotCountWidget } from "./spotCountWidget";

export function ColorForm() {
  return (
    <div className="bg-gray-200 mx-auto max-w-xl min-w-min mt-4 p-4 rounded-lg shadow-lg">
      {/* --- Toolbar --- */}
      <div className="flex gap-1.5">
        <AlgorithmWidget />
        <SpotCountWidget />
      </div>
      <InputColorText />
    </div>
  );
}
