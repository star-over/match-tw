import { createContext, useContext } from "react";
import { RootStore } from "./RootStore";

const store = new RootStore();

const MobxStoreContext = createContext();

export const StoreContextProvider = ({ children }) => (
  <MobxStoreContext.Provider value={ store }>
    { children }
  </MobxStoreContext.Provider>
);

export const useMobxStore = () => useContext(MobxStoreContext);
