import { handleTodoTaskSubmission as addTodoTask } from "@features";

export const handleKeyDownTodo = (input, list, validationMsg) => (e) => {
  if (e.key === "Enter") {
    addTodoTask(input, list, validationMsg);
  }
};
