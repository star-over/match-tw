import { InputColorText } from "@/components/widgets/input-color-text";
import { AlgorithmWidget } from "@/components/widgets/algorithm-widget";
import { SpotCountWidget } from "@/components/widgets/spot-count-widget";

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
