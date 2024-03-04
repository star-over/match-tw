import { Suspense } from "react";
import { InputColorText } from "./InputColorText";
import { RadioAlgorithms } from "./RadioAlgorithms";
import { RadioSpotCount } from "./RadioSpotCount";
import Loading from "../app/loading";

export const Toolbar = () => {
  return (
    <>
      <div className="flex gap-1.5">

        <Suspense fallback={<Loading />}>
          <RadioAlgorithms />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <RadioSpotCount />
        </Suspense>

      </div>
      <InputColorText />
    </>
  );
};
