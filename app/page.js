import { Title } from "../components/Title";
import { Breakpoints } from "../components/Breakpoints";
import { ColorSpotList } from "../components/ColorSpotList";
import { Suspense } from "react";
import { getServerSearchParamsState } from "../lib/searchParamsState";

// export const dynamic = 'force-dynamic';

export default function Home({ searchParams }) {
  const targetColor = getServerSearchParamsState("targetColor", searchParams);
  const algorithm = getServerSearchParamsState("algorithm", searchParams);
  const spotCount = getServerSearchParamsState("spotCount", searchParams);

  console.log("🚀 > Home > searchParams:", searchParams);

  console.log("🚀 > Home > searchParams:", targetColor, algorithm, spotCount);
  return (
    <>
      <div className="container min-w-min mx-auto pb-32 px-2 sm:px-8">

        <Title />
        <Suspense fallback={"Loading..."}>
          <ColorSpotList  { ...{ targetColor, algorithm, spotCount }} />
        </Suspense>
      </div>

      <Breakpoints />
    </>
  );
}
