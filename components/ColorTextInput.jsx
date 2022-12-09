import Color from "colorjs.io";

import { useEffect, useState } from "react"

export const ColorTextInput = (props) => {
  const { targetColor, setTargetColor } = props;
  const [textcolor, setTextColor] = useState("#123456");
  useEffect(() => console.log({ targetColor }), [targetColor]);
  const onChangeHandle = (e) => {
    const { value } = e.target;
    setTextColor(value);
    try {
      const parsedColor = new Color(value);
      setTargetColor(parsedColor);
      console.log("🚀 > onChangeHandle > parsedColor", { parsedColor });
    } catch (err) {
      console.log("🚀 > onChangeHandle > err", { err });
    }
  }
  return (
    <>
      <form action="echo.htmlacademy.ru">
        <input
          className=" w-48 mx-auto mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          type="text"
          value={ textcolor }
          onChange={ onChangeHandle } />
      </form>
    </>
  )
}
