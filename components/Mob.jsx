import { observer } from "mobx-react-lite"
import { useMobxStore } from "../context/StoreContextProvider";

export const Mob = observer(() => {
  const store = useMobxStore();

  return (<>
    <div className='' >{ store.uiStore.selectedDeltaE }</div>
    <input
      type="text"
      value={ store.uiStore.selectedDeltaE }
      onChange={ (e) => { store.uiStore.setSelectedDeltaE(e.target.value) } }
    />
  </>)
});
