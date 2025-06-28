import { trim } from "@utils";
import { getInputValue } from "@ui";

export const getTrimmedInputValue = (input) => {
  return trim(getInputValue(input));
};
