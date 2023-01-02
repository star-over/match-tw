// @ts-check
import { configure } from "mobx";
import { TargetStore } from "./TargetStore";
import { UiStore } from "./UiStore";

configure ({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
})

export class RootStore {
  constructor() {
    this.target = new TargetStore(this);
    this.uiStore = new UiStore(this);

    this.target.init();
    this.uiStore.init();
  }
}
