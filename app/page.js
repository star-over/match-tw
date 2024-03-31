import { Breakpoints } from "@/components/widgets/Breakpoints";
import ColorSpotList from "@/components/widgets/ColorSpotList";
import { Title } from "@/components/widgets/Title";
import { ColorForm } from "@/components/widgets/colorForm";
import { getServerSearchParamsState } from "@/lib/searchParamsState";

// ---------  next js config
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Find a closest tailwind color",
  description: "Closest color to tailwind CSS palette",
  verification: {
    google: '-sOdF1gPYCr2Bp9yRF2mh-XlhKi7-n0V8h_OeHR8810',
    yandex: "efb6a2518b4b8f75",
  }
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
        <ColorForm />
        <ColorSpotList  {...{ targetTextColor, algorithm, spotCount }} />
      </div>
      <Breakpoints />
    </>
  );
}
