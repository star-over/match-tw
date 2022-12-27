// @ts-check
import { configure, makeAutoObservable } from "mobx";
import { parseTextColor, toHex } from "../utils/utils";
import { twColors } from "../data/colorThemeDefault";


configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  observableRequiresReaction: true,
  reactionRequiresObservable: true,
})

export class TargetStore {
  root;
  color = parseTextColor("#000");
  // color = parseTextColor("#123456");

  constructor(root) {
    makeAutoObservable(this);
    this.root = root;
    // autorun(() => console.log(this))
    // no work here only assignments
  };

  init() {
    this.color = parseTextColor(this.root.uiStore.targetText);
  }

  get toHexValue() {
    return toHex(this.color);
  }
  get toHexClean() {
    return this.toHexValue.slice(1);
  }
  get toString() {
    return this.color.toString({ format: "rgb", precision: 4 });
  }
  get matchColors() {
    const { selectedAlgorithm, selectedSpotCount } = this.root.uiStore;
    return twColors
      // @ts-ignore
      .map((currColor) => ({ ...currColor, dE: this.color.deltaE(currColor.color, selectedAlgorithm) }))
      .sort(({ dE: a }, { dE: b }) => a - b)
      .slice(0, Number(selectedSpotCount));
  };
};
