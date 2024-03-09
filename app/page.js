import { Title } from "../components/Title";
import { Breakpoints } from "../components/Breakpoints";
import { Suspense } from "react";
import { getServerSearchParamsState } from "../lib/searchParamsState";
import ColorSpotList from "../components/ColorSpotList";

// export const dynamic = 'force-dynamic';

export default function Home({ searchParams }) {
  const targetTextColor = getServerSearchParamsState("targetTextColor", searchParams);
  const algorithm = getServerSearchParamsState("algorithm", searchParams);
  const spotCount = getServerSearchParamsState("spotCount", searchParams);


  console.log("🚀 > Home > searchParams:", targetTextColor, algorithm, spotCount);
  return (
    <>
      <div className="container min-w-min mx-auto pb-32 px-2 sm:px-8">

        <Title />
        <Suspense
          key={JSON.stringify(searchParams)}
          fallback={"Loading..."}>
          <ColorSpotList  {...{ targetTextColor, algorithm, spotCount }} />
        </Suspense>
      </div>

      <Breakpoints />
    </>
  );
}
