import { InputColorText } from "./InputColorText";
import { RadioAlgorithms } from "./RadioAlgorithms";
import { RadioSpotCount } from "./RadioSpotCount";
import { Algorithm } from "./widgets/algorithmWidget";

export const Toolbar = () => {
  return (
    <>
      <div className="flex gap-1.5">

        <Algorithm />
        {/* <RadioAlgorithms /> */}
        <RadioSpotCount />

      </div>
      <InputColorText />
    </>
  );
};
