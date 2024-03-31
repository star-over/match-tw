export function Breakpoints() {
  const isDevEnv = process?.env?.NODE_ENV === "development";
  if (isDevEnv === false) return;

  return (
    <div className="fixed text-center bottom-0 left-0 bg-slate-200/50 w-screen">
      <p className="text-center                   sm:hidden">none</p>
      <p className="text-center hidden  sm:block  md:hidden">sm</p>
      <p className="text-center hidden  md:block  lg:hidden">md</p>
      <p className="text-center hidden  lg:block  xl:hidden">lg</p>
      <p className="text-center hidden  xl:block  2xl:hidden">xl</p>
      <p className="text-center hidden 2xl:block">2xl</p>
    </div>
  );
}
