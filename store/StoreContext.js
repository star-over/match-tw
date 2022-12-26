// @ts-check
import React, { createContext, useContext } from "react";
import { RootStore } from "./RootStore";

const root = new RootStore();

const MobxStoreContext = createContext({});

export const StoreContext = ({ children }) => (
  <MobxStoreContext.Provider value={ root }>
    { children }
  </MobxStoreContext.Provider>
);

export const useStore = () => {
  const context = useContext(MobxStoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within StoreContext");
  }
  return context;
}
