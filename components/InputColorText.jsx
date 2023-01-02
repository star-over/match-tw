import { ExclamationCircleIcon, SwatchIcon } from '@heroicons/react/20/solid'
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useStore } from "../store/StoreContext";

export const InputColorText = observer(() => {
  const { uiStore: { setInputText, targetText, isTextValid } } = useStore();
  const [inputValue, setInputValue] = useState(targetText);

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => { setInputText(inputValue) }, 500)
    return () => clearTimeout(timer);
  }, [inputValue, setInputText]);

  const pClassName = clsx("m-2 text-sm transition duration-500", {
    "text-gray-600": isTextValid,
    "text-red-600": !isTextValid,
  })

  const inputClassName = clsx("block pl-10 w-full text-4xl rounded-md pr-10 focus:outline-none bg-gray-100/50", {
    "border-gray-300 text-gray-600 placeholder-gray-300 focus:border-gray-500/80 focus:ring-gray-500/80": isTextValid,
    "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500": !isTextValid,
  })

  return (
    <div>
      <label htmlFor="colorText" className="sr-only">Input color</label>
      <div className="relative mt-1 rounded-md shadow-sm">
        { isTextValid
          ? <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SwatchIcon className="h-5 w-5 text-gray-400/80" aria-hidden="true" />
          </div>
          : <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500/80" aria-hidden="true" />
          </div> }
        <input
          type="text"
          name="colorText"
          id="colorText"
          className={ inputClassName }
          placeholder="#123456 or gray or rgb(10, 20, 30)"
          value={ inputValue }
          onChange={ (e) => setInputValue(e.target.value) }
        />
      </div>
      <p
        className={ pClassName }>
        Enter the colour you wish to match in the tailwind palette. The colour can be specified as a word such as <strong>teal</strong>, or in hex <strong>#008080</strong> format, or&nbsp;in&nbsp;<strong>rgb(0,&nbsp;128,&nbsp;128)</strong> format, in any form that can be used in CSS.</p>
    </div>
  )
});
