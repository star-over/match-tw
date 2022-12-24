import { makeAutoObservable } from "mobx";

export class UiStore {
  rootStore;
  selectedDeltaE = "2000";
  selectedSpotCunt = "9";
  targetText = "#123456";

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  };

  setSelectedDeltaE(value) {
      this.selectedDeltaE = value;
  }

};
