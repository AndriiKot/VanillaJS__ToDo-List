import { isValidTodoInputValue, submitTodoTaskSuccessfully } from "@components";
import { showNotValidMessage } from "@handlers";

export const handleTodoTaskSubmission = (input, list, todoElementMessage) => {
  if (isValidTodoInputValue(input)) {
    submitTodoTaskSuccessfully(list, input);
  } else {
    showNotValidMessage(todoElementMessage, "Task cannot be empty");
  }
};
