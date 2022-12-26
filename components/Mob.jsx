import { observer } from "mobx-react-lite"
import { useStore } from "../store/StoreContext";

export const Mob = observer(() => {
  const store = useStore();

  return (<>
    <div className='' >{ store.target.toHexValue }</div>
    <input
      type="text"
      value={ store.uiStore.testValue }
      onChange={ (e) => { store.uiStore.testValue = e.target.value } }
    />
  </>)
});
