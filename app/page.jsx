/* eslint-disable no-console */

import ColorSpotList from "@/components/widgets/color-spot-list";
import { Title } from "@/components/widgets/title";
import { ColorForm } from "@/components/widgets/color-form";
import { getServerSearchParamsState } from "@/lib/search-params-state";
import { Breakpoints } from "@/components/widgets/breakpoints";

// ---------  next js config
// export const dynamic = "force-dynamic";

export const metadata = {
  title: "Find the nearest Tailwind color | Tailwind nearest color | Tailwind colors matching",
  description: "Find the nearest color from Tailwind colors palette",
  verification: {
    google: "-sOdF1gPYCr2Bp9yRF2mh-XlhKi7-n0V8h_OeHR8810",
    yandex: "efb6a2518b4b8f75",
  },
};

export default async function Home({ searchParams }) {
  const targetTextColor = getServerSearchParamsState("targetTextColor", searchParams);
  const algorithm = getServerSearchParamsState("algorithm", searchParams);
  const spotCount = getServerSearchParamsState("spotCount", searchParams);

  console.log("🚀 > searchParams:", { targetTextColor, algorithm, spotCount });

  return (
    <>
      <div className="container min-w-min px-0 sm:px-4">
        <Title />
        <ColorForm {...{ targetTextColor, algorithm, spotCount }} />
        <ColorSpotList {...{ targetTextColor, algorithm, spotCount }} />
      </div>
      <Breakpoints />
    </>
  );
}
