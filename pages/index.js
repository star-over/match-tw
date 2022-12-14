import { useEffect, useState } from "react";
import { ColorSpotList } from "../components/ColorSpotList";
import { ColorTextInput } from "../components/ColorTextInput";
import { colorThemeDefault } from "../data/colorThemeDefault";
import { parseTextColor, toHex } from "../utils/utils";

const INITIAL_COLOR = "#123456";

export default function Home() {
  const [targetColor, setTargetColor] = useState(parseTextColor(INITIAL_COLOR));
  const [themeColors, setThemeColors] = useState([]);
  const [matchColors, setMatchColors] = useState([]);

  useEffect(() => {
    setThemeColors(colorThemeDefault);
  }, []);

  useEffect(() => {
    const distancesToTarget = themeColors
      .map((item) => ({ ...item, dE2000: targetColor.deltaE(item.color, "2000") }))
      .sort(({ dE2000: a }, { dE2000: b }) => a - b)
      .slice(0, 9);

    setMatchColors(distancesToTarget);
  }, [targetColor, themeColors]);

  return (
    <>
      <h1
        className="text-transparent text-2xl sm:text-5xl lg:text-6xl p-8 text-center font-black font-sans
        bg-clip-text bg-gradient-to-r from-sky-600 to-rose-600"
      >
        Tailwindcss is runing!
      </h1>
      <ColorTextInput
        className="mb-6"
        targetColor={ targetColor }
        setTargetColor={ setTargetColor }
      />
      <div className="container sm:m-auto">
        <div className="">
          <ColorSpotList
            colors={ matchColors }
            targetColorHex={ toHex(targetColor) }
          />
        </div>
      </div>
    </>
  )
}
