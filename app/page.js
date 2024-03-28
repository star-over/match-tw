import { Title } from "@/components/widgets/Title";
import { Breakpoints } from "@/components/widgets/Breakpoints";
import { Suspense } from "react";
import { getServerSearchParamsState } from "@/lib/searchParamsState";
import ColorSpotList from "@/components/widgets/ColorSpotList";

export const metadata = {
  title: "Find a closest tailwind color",
  description: "Closest color to tailwind CSS palette",
  verification: {
    google: '-sOdF1gPYCr2Bp9yRF2mh-XlhKi7-n0V8h_OeHR8810',
    yandex: "efb6a2518b4b8f75",
  }
}

export default function Home({ searchParams }) {
  const targetTextColor = getServerSearchParamsState("targetTextColor", searchParams);
  const algorithm = getServerSearchParamsState("algorithm", searchParams);
  const spotCount = getServerSearchParamsState("spotCount", searchParams);


  console.log("🚀 > Home > searchParams:", targetTextColor, algorithm, spotCount);
  return (
    <>
      <div className="container min-w-min px-0 sm:px-4">

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
