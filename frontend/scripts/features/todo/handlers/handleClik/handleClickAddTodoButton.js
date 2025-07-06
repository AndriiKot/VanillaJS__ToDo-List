import { handleTodoTaskSubmission as addTodoTask } from "@features";

export const handleClickAddTodoButton = (input, list, validationMsg) => () => {
  addTodoTask(input, list, validationMsg);
};
