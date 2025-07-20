import {
  isValidTodoInputValue,
  submitTodoTaskSuccessfully,
  showNotValidMessage,
} from "@features";
import { resetInput } from "@ui";

export const handleTodoTaskSubmission = (input, list, todoElementMessage) => {
  if (isValidTodoInputValue(input)) {
    submitTodoTaskSuccessfully(list, input);
  } else {
    showNotValidMessage(todoElementMessage, "Task cannot be empty");
  }
  resetInput(input);
};
