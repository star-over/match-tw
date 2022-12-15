import { useEffect, useState } from "react";
import { Breakpoints } from "../components/Breakpoints";
import { ColorSpotList } from "../components/ColorSpotList";
import { ColorTextInput } from "../components/ColorTextInput";
import { Title } from "../components/Title";
import { colorThemeDefault } from "../data/colorThemeDefault";
import { parseTextColor, toHex } from "../utils/utils";
import {
  useQuery,
  // useMutation,
  useQueryClient,
  // QueryClient,
  // QueryClientProvider,
} from '@tanstack/react-query'

const INITIAL_COLOR = "#123456";

export default function Home() {
  const [targetColor, setTargetColor] = useState(parseTextColor(INITIAL_COLOR));
  const [themeColors, setThemeColors] = useState([]);
  const [matchColors, setMatchColors] = useState([]);
  const [matchCount, setMatchCount] = useState(1);
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ['1111'], queryFn:  () => [1,2,3,4]  })



  useEffect(() => {
    setThemeColors(colorThemeDefault);
    setMatchCount(9);
  }, []);

  useEffect(() => {
    const mathes = themeColors
      .map((item) => ({ ...item, dE2000: targetColor.deltaE(item.color, "2000") }))
      .sort(({ dE2000: a }, { dE2000: b }) => a - b)
      .slice(0, matchCount);

    setMatchColors(mathes);
  }, [targetColor, themeColors, matchCount]);

  return (
    <>
      <div className="container sm:m-auto pb-32  border border-solid border-red-300">
        <Title />
        <pre>{query.data}</pre>
        <ColorTextInput
          targetColor={ targetColor }
          setTargetColor={ setTargetColor }
        />
        <ColorSpotList
          colors={ matchColors }
          targetColorHex={ toHex(targetColor) }
        />
      </div>
        <Breakpoints />
    </>
  )
}
