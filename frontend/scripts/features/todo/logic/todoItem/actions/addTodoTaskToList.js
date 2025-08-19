import { getTrimmedInputValue, appendListItemLi } from '@ui';
import { createTodoItem, serializeTodosFromList, saveTodosToLocalStorage } from '@features';

export const addTodoTaskToList = (list, input) => {
  const taskText = getTrimmedInputValue(input);
  const todoItem = createTodoItem(taskText);
  appendListItemLi(list, todoItem);
  const currentTodos = serializeTodosFromList(list);
  saveTodosToLocalStorage(currentTodos);
};
