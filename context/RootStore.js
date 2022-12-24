import { UiStore } from "./UiStore";

export class RootStore {
  constructor() {
    this.uiStore = new UiStore(this);
  }
}
