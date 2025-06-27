import { addTaskToList, clearInputValue } from "@task";
import { focusInput } from "@ui";

export const submitTaskSuccessfully = (list, input) => {
  addTaskToList(list, input);
  clearInputValue(input);
  focusInput(input);
};
