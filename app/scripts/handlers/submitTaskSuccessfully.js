import { addTaskToList, clearInput } from "../task.js";
import { inputFocus } from "@ui";

export const submitTaskSuccessfully = (list, input) => {
  addTaskToList(list, input);
  clearInput(input);
  inputFocus(input);
};
