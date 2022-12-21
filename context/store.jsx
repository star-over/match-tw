import { useContext, createContext, useState, useRef, useEffect } from "react";
import { parseTextColor, sortByDeltaE, toHex } from "../utils/utils";
import { theme } from "../data/colorThemeDefault";

const INITIAL_COLOR_HEX = "#123456";

const initialState = {
  targetColor: parseTextColor(INITIAL_COLOR_HEX),
  targetColorHex: INITIAL_COLOR_HEX,
  matchColors: [],
  themeColors: theme,
  matchCount: 9,
  inputText: INITIAL_COLOR_HEX,
};

const makeState = initObj => {
  const makeAccessors = ([get, set]) => ({ get, set });
  return Object.fromEntries(
    Object.entries(initObj)
      .map(([key, value]) => [key, makeAccessors(useState(value))]),
  );
};

const AppStoreContext = createContext();

export const AppStore = ({ children }) => {

  const state = useRef();
  state.current = { ...makeState(initialState) };

  useEffect(() => {
    state.current.matchColors.set(
      sortByDeltaE({
        themeColors: state.current.themeColors.get,
        targetColor: state.current.targetColor.get,
        matchCount: state.current.matchCount.get,
      }));

    state.current.targetColorHex.set(toHex(state.current.targetColor.get));
  }, [state.current.targetColor.get]);

  useEffect(() => {
    const color = parseTextColor(state.current.inputText.get);
    if (color) {
      color.alpha = 1; // set no alpha
      state.current.targetColor.set(color);
    }
  }, [state.current.inputText.get]);

  return (
    <AppStoreContext.Provider value={ state.current } >
      { children }
    </AppStoreContext.Provider >
  );
}

export const useAppStore = () => useContext(AppStoreContext);
