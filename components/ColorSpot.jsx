export const ColorSpot = (props) => {
  const { colorName, colorHex } = props;
  const divStyle = {
    backgroundColor: colorHex,
  };

  return (
    <div
      className="w-full text-md text-slate-300 text-center flex-grow"
      style={ divStyle }
    >
      { colorName }
    </div>
  )
};
