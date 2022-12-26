import { cva } from "class-variance-authority";
import { observer } from "mobx-react-lite";

const button = cva(["px-2 py-1 text-sm font-medium leading-none border border-gray-300",
  "rounded-sm first:rounded-l-md last:rounded-r-md ",
  "bg-gray-200 text-gray-500 active:bg-gray-200 hover:bg-gray-100 hover:shadow active:shadow",
  "transition"],
  {
    variants: {
      selected: { true: ["bg-[#FFFFFF] hover:bg-white shadow"] },
    },
    defaultVariants: { selected: false },
  });

const ToolBotton = ({ selected, value, setSelected }) => {
  const classname = button({ selected })
  return (
    <button
      className={ classname }
      type="button"
      value={ value }
      onClick={ (e) => setSelected(e.target.value) }
    > { value } </button>
  )
};

export const RadioBottons = observer(({ variants, currentValue, setValue }) => {
  const radioItems = variants.map((variant) => (
    <
    ToolBotton
      key={ variant }
      value={ variant }
      selected={ variant === currentValue }
      setSelected={ setValue }
    > { variant } </ToolBotton>
  ));

  return (
    <div className="inline-flex p-1 space-x-0.5 bg-gray-200 rounded-lg first:rounded-l-md " role="group">
      { radioItems }
    </div>
  )
});
