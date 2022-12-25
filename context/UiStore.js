import { makeAutoObservable } from "mobx";
import { parseTextColor, toHex } from "../utils/utils";

const algorithms = ["2000", "76", "Jz", "CMC", "ITP", "OK"];
const spotCounts = ["12", "9", "6", "3"];

export class UiStore {
  root;
  selectedAlgorithm = algorithms[0];
  selectedSpotCount = spotCounts[0];
  targetText = "#123456";
  targetColor = parseTextColor("#123456");
  isValid = true;
  formAlgorithms = algorithms;
  formSpotsCount = spotCounts;

  constructor(root) {
    makeAutoObservable(this);
    this.root = root;
    // autorun(() => console.log(this))
    // no work here only assignments
  };
  setAlgorithm = (value) => {
    this.selectedAlgorithm = value;
  }
  setSpotCount = (value) => {
    this.selectedSpotCount = value;
  }
  setTargetColor = () => {
    const color = parseTextColor(this.targetText);
    this.isValid = false;
    if (color) {
      color.alpha = 1; // set no-alpha
      this.targetColor = color;
      this.isValid = true;
    }
  }
  setTargetText = (value) => {
    this.targetText = value;
    this.setTargetColor();
  }

  get targetColorHex() {
    return toHex(this.targetColor)
  }
};
