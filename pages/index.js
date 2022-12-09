import Color from "colorjs.io";
import { useEffect, useState } from "react";
import { ColorSpot } from "../components/ColorSpot";
import { ColorTextInput } from "../components/ColorTextInput";
import { colorThemeDefault } from "../data/colorThemeDefault";

export default function Home() {

  const [targetColor, setTargetColor] = useState(null);
  const [colors, setColors] = useState([]);
  const [distances, setDistances] = useState([]);

  useEffect(() => {
    setColors(colorThemeDefault);
  }, []);

  useEffect(() => {
    const distancesToTarget = colors
    .map((item) => {
      const dE2000 = Color.deltaE(targetColor, item.color, "2000");

      return { ...item, dE2000 };
    })
    .sort(({ dE2000: a }, { dE2000: b })=> a - b)
    .slice(0, 6);
    setDistances(distancesToTarget);

  }, [targetColor]);

  useEffect(()=> {
    console.log({distances})
  }, [distances])
  return (
    <>
      <h1 className="text-transparent text-8xl p-8 text-center font-black font-sans bg-clip-text bg-gradient-to-r from-sky-600 to-rose-600">Tailwindcss is runing</h1>
      <ColorSpot />
      <ColorTextInput targetColor={targetColor} setTargetColor={setTargetColor} />
    </>
  )
}
