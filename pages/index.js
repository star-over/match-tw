import { Title } from "../components/Title";
import { Breakpoints } from "../components/Breakpoints";
import { ColorSpotList } from "../components/ColorSpotList";
import { ColorTextInput } from "../components/ColorTextInput";

import { useAppStore } from "../context/store";

export default function Home() {
  const { targetColor, matchColors, targetColorHex } = useAppStore();

  return (
    <>
      <div className="container sm:m-auto pb-32  border border-solid border-red-300">
        <Title />
        <ColorTextInput
          targetColor={ targetColor.get }
          setTargetColor={ targetColor.set }
        />
        <ColorSpotList
          colors={ matchColors.get }
          targetColorHex={ targetColorHex.get }
        />
      </div>
      <Breakpoints />
    </>
  )
}
