import { cva } from "class-variance-authority";
import { observer } from "mobx-react-lite";
import React from "react";

const button = cva(["flex-grow py-1 text-sm font-medium leading-none border border-gray-400/90",
  "rounded-sm first:rounded-l-md last:rounded-r-md ",
  "text-gray-600 active:bg-gray-200/50 hover:bg-gray-50/50 hover:shadow active:shadow",
  "transition"],
  {
    variants: {
      selected: { true: ["bg-gray-400/80 hover:bg-gray-400/50 shadow"] },
    },
    defaultVariants: { selected: false },
  });

const RadioBotton = ({ selected, value, setSelected }) => {
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
      RadioBotton
      key={ variant }
      value={ variant }
      selected={ variant === currentValue }
      setSelected={ setValue }
    > { variant } </RadioBotton>
  ));

  return (
    <div className="flex-grow flex p-1 space-x-0.5 rounded-lg first:rounded-l-md " role="group">
      { radioItems }
    </div>
  )
});
