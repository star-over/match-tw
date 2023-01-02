// @ts-check
import { autorun, makeAutoObservable } from "mobx";
import { parseTextColor } from "../utils/utils";

const algorithms = ["2000", "76", "Jz", "CMC", "ITP", "OK"];
const spotCounts = ["12", "9", "6", "3"];



export class UiStore {
  root;
  testValue = "12345";
  selectedAlgorithm = algorithms[0];
  selectedSpotCounts = spotCounts[0];
  targetText = "teal";
  isTextValid = true;
  formAlgorithms = algorithms;
  formSpotCounts = spotCounts;

  constructor(root) {
    makeAutoObservable(this);
    this.root = root;
    // autorun(() => console.log(this))
    // no work here only assignments
  };

  init() {
    autorun(() => {
      const color = parseTextColor(this.targetText);
      this.isTextValid = false;
      if (color) {
        color.alpha = 1; // set no-alpha
        this.targetColor = color;
        this.isTextValid = true;
        this.root.target.color = color;
      }
    });
  }
  setAlgorithm = (value) => {
    this.selectedAlgorithm = value;
  }
  setSpotCounts = (value) => {
    this.selectedSpotCounts = value;
  }
  setInputText = (value) => {
    this.targetText = value.trim();
  }
};
