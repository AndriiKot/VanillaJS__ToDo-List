import { handleTodoTaskSubmission as addTodoTask } from "@features";

export const handleClick = (input, list, validationMsg) => () => {
  addTodoTask(input, list, validationMsg);
};
