import { Title } from "../components/Title";
import { Breakpoints } from "../components/Breakpoints";
import { ColorSpotList } from "../components/ColorSpotList";
import { ColorTextInput } from "../components/ColorTextInput";
import { RadioBottons } from "../components/RadioBottons";

export default function Home() {

  return (
    <>
      <div className="container sm:m-auto pb-32  border border-solid border-red-300">
        <Title />
        <RadioBottons
          variants={ ["2000", "76", "Jz", "CMC", "ITP", "OK"] } />
        <ColorTextInput />
        <RadioBottons
          variants={ ["12", "9", "6", "3"] } />
        <ColorSpotList />
      </div>
      <Breakpoints />
    </>
  )
}
