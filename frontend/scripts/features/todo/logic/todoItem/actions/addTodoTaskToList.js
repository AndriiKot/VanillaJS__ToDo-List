import { getTrimmedInputValue, appendListItemLi } from "@ui";
import { createTodoItem, getTodoTextList, saveTodos } from "@features";

export const addTodoTaskToList = (list, input) => {
  const taskText = getTrimmedInputValue(input);
  const todoItem = createTodoItem(taskText);
  appendListItemLi(list, todoItem);
  const currentTodos = getTodoTextList(list);
  saveTodos(currentTodos);
};
