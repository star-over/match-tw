import { createContext, useContext } from "react";
import { RootStore } from "./RootStore";

const root = new RootStore();

const MobxStoreContext = createContext();

export const StoreContextProvider = ({ children }) => (
  <MobxStoreContext.Provider value={ root }>
    { children }
  </MobxStoreContext.Provider>
);

export const useMobxStore = () => {
  const context = useContext(MobxStoreContext)
  if (context === undefined) {
    throw new Error("useMobxStore must be used within StoreContextProvider")
  }
  return context
}
