import { Title } from "../components/Title";
import { Breakpoints } from "../components/Breakpoints";
import { ColorSpotList } from "../components/ColorSpotList";

export default function Home() {
  return (
    <>
      <div className="container min-w-min mx-auto pb-32 px-2 sm:px-8">
        <Title />
        <ColorSpotList />
      </div>
      <Breakpoints />
    </>
  )
}
