import { toggleTodoItem, getToggleTodoContext } from "@features";
import { safeContains } from "@ui";

export const handleClickItemTodo = (event) => {
  const { target, currentTarget, className } = getToggleTodoContext(event);
  safeContains(currentTarget, target);
  toggleTodoItem(target, className);
};
