export function Breakpoints() {
  const isDevEnv = process?.env?.NODE_ENV === "development";
  if (isDevEnv === false) return undefined;

  return (
    <div className="fixed bottom-0 left-0 w-screen bg-slate-200/50 text-center">
      <p className="text-center                   sm:hidden">none</p>
      <p className="hidden text-center  sm:block  md:hidden">sm</p>
      <p className="hidden text-center  md:block  lg:hidden">md</p>
      <p className="hidden text-center  lg:block  xl:hidden">lg</p>
      <p className="hidden text-center  xl:block  2xl:hidden">xl</p>
      <p className="hidden text-center 2xl:block">2xl</p>
    </div>
  );
}
