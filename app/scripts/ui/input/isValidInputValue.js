import { isEmpty } from "@utils";
import { getTrimmedInputValue } from "@ui";

export const isValidInputValue = (input) => {
  return !isEmpty(getTrimmedInputValue(input));
};
