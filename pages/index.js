import Color from "colorjs.io";
import { useEffect, useState } from "react";
import { ColorSpot } from "../components/ColorSpot";
import { ColorSpotList } from "../components/ColorSpotList";
import { ColorTextInput } from "../components/ColorTextInput";
import { colorThemeDefault } from "../data/colorThemeDefault";

export default function Home() {

  const [targetColor, setTargetColor] = useState(Color.get("#111111"));
  const [colors, setColors] = useState([]);
  const [distances, setDistances] = useState([]);

  useEffect(() => {
    setColors(colorThemeDefault);
  }, []);


  useEffect(() => {
    const distancesToTarget = colors
      .map((item) => {
        const dE2000 = targetColor.deltaE(item.color, "2000");

        return { ...item, dE2000 };
      })
      .sort(({ dE2000: a }, { dE2000: b }) => a - b)
      .slice(0, 6);
    setDistances(distancesToTarget);

  }, [targetColor]);

  useEffect(() => {
      console.log(distances);
  }, [distances])
  return (
    <>
      <h1 className="text-transparent text-8xl p-8 text-center font-black font-sans bg-clip-text bg-gradient-to-r from-sky-600 to-rose-600">Tailwindcss is runing</h1>
      <ColorTextInput className="mb-6" targetColor={ targetColor } setTargetColor={ setTargetColor } />
      <div className="container m-auto border border-red-300 border-solid">
        <div className="w-auto flex h-56">
          <ColorSpot colorName={targetColor.toString({format: "hex"})} colorHex={targetColor.toString({format: "hex"})} />
          <ColorSpotList colors={ distances } />
        </div>
      </div>
    </>
  )
}
