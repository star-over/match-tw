import { InputColorText } from "./InputColorText";
import { AlgorithmWidget } from "./widgets/algorithmWidget";
import { SpotCountWidget } from "./widgets/spotCountWidget";

export const Toolbar = () => {
  return (
    <>
      <div className="flex gap-1.5">
        <AlgorithmWidget />
        <SpotCountWidget />

      </div>
      <InputColorText />
    </>
  );
};
