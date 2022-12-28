import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useStore } from "../store/StoreContext";
import { DropDown } from "./DropDown";
import { RadioBottons } from "./RadioBottons";
import { SquaresPlusIcon, CodeBracketSquareIcon, SwatchIcon } from '@heroicons/react/20/solid'



export const Toolbar = observer(() => {
  const { uiStore } = useStore();
  const [inputValue, setInputValue] = useState(uiStore.targetText);

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => { uiStore.targetText = inputValue }, 500)
    return () => clearTimeout(timer);
  }, [inputValue, uiStore]);

  return (
    <div className="w-2xl  flex mt-6 mx-10">
      <label className="flex justify-center items-center w-8 h-8 bg-slate-200 rounded-full" htmlFor="message-type">
        <CodeBracketSquareIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
      </label>
      <RadioBottons
        variants={ uiStore.formAlgorithms }
        currentValue={ uiStore.selectedAlgorithm }
        setValue={ uiStore.setAlgorithm }
      />
      {/* <div>{ uiStore.targetText }</div> */ }
      <label className="flex justify-center items-center w-8 h-8 bg-slate-200 rounded-full" htmlFor="message-type">
        <SwatchIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
      </label>
      <input
        className="inline-block flex-grow px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        "
        type="text"
        value={ inputValue }
        onChange={ (e) => setInputValue(e.target.value) }
      />
      <label className="flex justify-center items-center w-8 h-8 bg-slate-200 rounded-full" htmlFor="message-type">
        <SquaresPlusIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
      </label>
      <RadioBottons
        variants={ uiStore.formSpotsCount }
        currentValue={ uiStore.selectedSpotCount }
        setValue={ uiStore.setSpotCount }
      />
      <DropDown />
    </div>

  )
});
