import { Title } from "../components/widgets/Title";
import { Breakpoints } from "../components/widgets/Breakpoints";
import { ColorSpotList } from "../components/widgets/ColorSpotList";

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
