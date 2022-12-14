import { useState } from "react";
import { parseTextColor, toHex } from "../utils/utils";

export const ColorTextInput = (props) => {
  const { targetColor, setTargetColor } = props;
  const [textcolor, setTextColor] = useState(toHex(targetColor));

  const onChangeHandle = (e) => {
    const { value } = e.target;
    const color = parseTextColor(value);
    setTextColor(value);

    if (color) {
      setTargetColor(color);
    }
  }

  return (
    <>
        <input
          className=" w-10/12 mx-auto mt-10 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          sm:w-7/12
          lg:w-6/12
          xl:w-5/12
          2xl:w-4/12
          "
          type="text"
          value={ textcolor }
          onChange={ onChangeHandle }
        />
    </>
  )
}
