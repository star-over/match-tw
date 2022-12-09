import { useEffect, useState } from "react"

export const ColorTextInput = () => {
  const [textcolor, setTextColor] = useState("#123456");
  useEffect(() => console.log({textcolor}), [textcolor]);
  return (
    <>
      <form action="echo.htmlacademy.ru">
        <input type="text" value={textcolor} onChange={(e) => setTextColor(e.target.value)} />
      </form>
    </>
  )
}
