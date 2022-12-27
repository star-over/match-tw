// @ts-check
import { TargetStore } from "./TargetStore";
import { UiStore } from "./UiStore";

export class RootStore {
  constructor() {
    this.target = new TargetStore(this);
    this.uiStore = new UiStore(this);

    this.target.init();
    this.uiStore.init();
  }
}
