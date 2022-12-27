import { observer } from "mobx-react-lite";
import { useStore } from "../store/StoreContext";
import { contrastStyle } from "../utils/utils";
import { ColorSpot } from "./ColorSpot";

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
      className="grid grid-cols-1 gap-12 p-12 rounded mt-6 transition-all delay-75 duration-700
      sm:mx-2 sm:grid-cols-2 sm:rounded-lg sm:gap-x-6
      md:mx-4 md:gap-x-12
      lg:mx-8 lg:grid-cols-3 lg:rounded-xl
      xl:mx-10 xl:rounded-xl
      2xl:mx-12 2xl:rounded-3xl"
      style={ contrastStyle(target.toHexValue) }
    >
      <div className="col-span-full font-mono text-lg">
        <p className="text-center " >current color</p>
        <p className="text-center" >{ target.toHexValue }</p>
        <p className="text-center" >{ target.toString }</p>
      </div>
      { colorSpots }
    </div>
  )
});
