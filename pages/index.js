import { Title } from "../components/Title";
import { Breakpoints } from "../components/Breakpoints";
import { ColorSpotList } from "../components/ColorSpotList";
import { ColorTextInput } from "../components/ColorTextInput";
import { Mob } from "../components/Mob";

export default function Home() {

  return (
    <>
      <div className="container sm:m-auto pb-32 border border-solid border-red-300">
        <Title />
        <Mob />
        <ColorTextInput />
        <ColorSpotList />
      </div>
      <Breakpoints />
    </>
  )
}
