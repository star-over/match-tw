import { TwThemeStore } from "./TwThemeStore";
import { UiStore } from "./UiStore";

export class RootStore {
  constructor() {
    this.uiStore = new UiStore(this);
    this.twThemeStore = new TwThemeStore(this);

    this.twThemeStore.init();
  }
}
