import { observer } from "mobx-react-lite";
import { useStore } from "../store/StoreContext";
import { contrastStyle } from "../utils/utils";
import { ColorSpot } from "./ColorSpot";
import { Toolbar } from "./Toolbar";

export const ColorSpotList = observer(() => {
  const { target } = useStore();

  const colorSpots = target.matchColors
    .map(({ colorHex, colorName, dE }) => (
      <ColorSpot
        key={ colorHex }
        dE={ dE }
        colorName={ colorName }
        colorHex={ colorHex }
      />))

  return (
    <div
      className="grid grid-cols-1 min-w-min gap-6 px-8 py-8 mt-6 transition-all delay-75 duration-700
      sm:grid-cols-2 sm:rounded-lg sm:gap-x-6 sm:py-8 shadow-lg

      lg:p-10 lg:grid-cols-3
      xl:p-16
      2xl:mx-12 2xl:rounded-3xl"
      style={ contrastStyle(target.toHexValue) }
    >

      <div className="mx-auto max-w-xl min-w-min col-span-full  ">
        <div className="bg-gray-200/60 px-4 sm:px-6 pt-6 pb-2 rounded-lg shadow-lg">
          <Toolbar />
        </div>
        <div className="pt-4 font-mono text-xs sm:text-sm">
          <p className="text-center">
            <span >current color: </span>
            <span >{ target.toHexValue } </span>
            <span >{ target.toString }</span>
          </p>
        </div>
      </div>

      { colorSpots }
    </div>
  )
});
