// @ts-check
import { configure, makeAutoObservable } from "mobx";
import { parseTextColor, toHex } from "../utils/utils";

configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  observableRequiresReaction: true,
  reactionRequiresObservable: true,
})

export class TargetStore {
  root;
  color = parseTextColor("#123456");

  constructor(root) {
    makeAutoObservable(this);
    this.root = root;
    // autorun(() => console.log(this))
    // no work here only assignments
  };

  get toHexValue() {
    return toHex(this.color);
  }
  get toHexClean() {
    return this.toHexValue.slice(1);
  }
};
