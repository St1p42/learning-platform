// dataManager.js
import type {PassageModel} from "../../models/PassageModel";

let passageData: PassageModel | null = null;

export default {
  setData(data: PassageModel) {
    passageData = data;
  },
  getData() {
    return passageData;
  }
};