import { InputColorText } from "./InputColorText";
import { RadioAlgorithms } from "./RadioAlgorithms";
import { RadioSpotCount } from "./RadioSpotCount";

export const Toolbar = () => {
  return (
    <>
      <div className="flex gap-1.5">

        <RadioAlgorithms />
        <RadioSpotCount />

      </div>
      <InputColorText />
    </>
  );
};
