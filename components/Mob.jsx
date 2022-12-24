import { observer } from "mobx-react-lite"
import { useMobxStore } from "../context/StoreContextProvider";

export const Mob = observer(() => {
  const { uiStore } = useMobxStore();

  return (<>
    <div className='' >{ uiStore.selectedDeltaE }</div>
    <input
      type="text"
      value={ uiStore.selectedDeltaE }
      onChange={ (e) => { uiStore.setSelectedDeltaE(e.target.value) } }
    />
  </>)
});
