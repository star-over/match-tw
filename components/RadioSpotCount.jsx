import { RadioBottons } from "./RadioBottons";
import { SquaresPlusIcon } from '@heroicons/react/20/solid'

export const RadioSpotCount = () => {
  // const { uiStore: { setSpotCounts, formSpotCounts, selectedSpotCounts } } = useStore();

  return (
    <div className="isolate h-10 flex-grow flex rounded-md shadow-sm bg-gray-100/50 border border-gray-300/80"
      title="Select the number of colours suggested"
    >
      <label
        className="inset-y-0 right-0 flex items-center pr-1 pl-2"
        htmlFor="message-type"
      >
        <SquaresPlusIcon className="h-5 w-5 text-gray-400/80" aria-hidden="true" />
      </label>
      {/* <RadioBottons
        variants={ formSpotCounts }
        currentValue={ selectedSpotCounts }
        setValue={ setSpotCounts }
      /> */}
    </div>
  )
};
