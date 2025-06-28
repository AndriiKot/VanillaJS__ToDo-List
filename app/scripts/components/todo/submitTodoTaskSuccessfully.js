import { focusInput, clearInputValue } from "@ui";
import { addTodoTaskToList } from "@components";

export const submitTodoTaskSuccessfully = (list, input) => {
  addTodoTaskToList(list, input);
  clearInputValue(input);
  focusInput(input);
};
