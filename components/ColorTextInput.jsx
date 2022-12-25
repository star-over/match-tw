import { observer } from "mobx-react-lite";
import { useMobxStore } from "../context/StoreContextProvider";
import { RadioBottons } from "./RadioBottons";

export const ColorTextInput = observer(() => {
  const { uiStore } = useMobxStore();

  // variants, currentValue, setValue
  return (
    <div className="w-2xl  flex mt-6 mx-10">
      <RadioBottons
        variants={ uiStore.formAlgorithms }
        currentValue={ uiStore.selectedAlgorithm }
        setValue={ uiStore.setAlgorithm }
      />
      <input
        className="inline-block flex-grow px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500

        "
        type="text"
        value={ uiStore.targetText }
        onChange={ (e) => uiStore.setTargetText(e.target.value) }
      />
      <RadioBottons
        variants={ uiStore.formSpotsCount }
        currentValue={ uiStore.selectedSpotCount }
        setValue={ uiStore.setSpotCount }
        />
    </div>

  )
});
