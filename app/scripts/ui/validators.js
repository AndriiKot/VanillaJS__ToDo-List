import { trim, isEmpty } from "../utils.js";
import { getInputValue } from "./getters.js";

export const getTrimmedInputValue = (input) => trim(getInputValue(input));

export const isValidInputValue = (input) => {
  return !isEmpty(getTrimmedInputValue(input));
};
