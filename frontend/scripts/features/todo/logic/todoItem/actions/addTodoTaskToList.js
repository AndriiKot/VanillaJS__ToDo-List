import { getTrimmedInputValue, appendListItemLi } from "@ui";
import { createTodoItem, getTodoTextList } from "@features";
import { saveTodos } from "@services";

export const addTodoTaskToList = (list, input) => {
  const taskText = getTrimmedInputValue(input);
  const todoItem = createTodoItem(taskText);
  appendListItemLi(list, todoItem);
  const currentTodos = getTodoTextList(list);
  saveTodos(currentTodos);
};
