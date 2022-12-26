// @ts-check
import { makeAutoObservable } from "mobx";
import { twColors } from "../data/colorThemeDefault";


export class TwThemeStore {
  root;
  twColors;

  constructor(root) {
    makeAutoObservable(this);
    this.root = root;
    // no work here only assignments
  };

  init() {
    this.twColors = [...twColors];
  }

  get matchColors() {
    const {selectedAlgorithm, selectedSpotCount, targetColor } = this.root.uiStore;
    return this.twColors
      .map((currColor) => ({ ...currColor, dE: targetColor.deltaE(currColor.color, selectedAlgorithm) }))
      .sort(({ dE: a }, { dE: b }) => a - b)
      .slice(0, Number(selectedSpotCount));
  };


};
