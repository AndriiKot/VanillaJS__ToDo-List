import { addTaskToList, clearInput } from "@task";
import { inputFocus } from "@ui";

export const submitTaskSuccessfully = (list, input) => {
  addTaskToList(list, input);
  clearInput(input);
  inputFocus(input);
};
