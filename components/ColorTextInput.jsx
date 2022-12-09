import Color from "colorjs.io";

import { useEffect, useState } from "react"

export const ColorTextInput = (props) => {
  const { targetColor, setTargetColor } = props;
  const [textcolor, setTextColor] = useState("#123456");
  useEffect(() => console.log({targetColor}), [targetColor]);
  const onChangeHandle = (e) => {
    const { value } = e.target;
    setTextColor(value);
    try {
      const parsedColor =  Color.parse(value);
      setTargetColor(parsedColor);
      console.log("🚀 > onChangeHandle > parsedColor", {parsedColor});
    } catch (err) {
      console.log("🚀 > onChangeHandle > err", {err});
    }
  }
  return (
    <>
      <form action="echo.htmlacademy.ru">
        <input type="text" value={textcolor} onChange={onChangeHandle} />
      </form>
    </>
  )
}
