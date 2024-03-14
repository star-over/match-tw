import { InputColorText } from "./InputColorText";
import { SpotCount } from "./widgets/spotCountWidget";
import { Algorithm } from "./widgets/algorithmWidget";

export const Toolbar = () => {
  return (
    <>
      <div className="flex gap-1.5">

        <Algorithm />
        <SpotCount />

      </div>
      <InputColorText />
    </>
  );
};
