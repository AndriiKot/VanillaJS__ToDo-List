import { trim, isEmpty } from "@utils";
import { getInputValue } from "@ui";

export const getTrimmedInputValue = (input) => trim(getInputValue(input));

export const isValidInputValue = (input) => {
  return !isEmpty(getTrimmedInputValue(input));
};
