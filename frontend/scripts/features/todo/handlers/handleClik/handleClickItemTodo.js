import { toggleTodoItem, getToggleTodoContext, serializeTodosFromList } from '@features';
import { resetInput, safeContains } from '@ui';
import { saveTodosToLocalStorage } from '@features';

export const handleClickItemTodo = (event, todoList, todoInput) => {
  const { target, currentTarget, className } = getToggleTodoContext(event);
  safeContains(currentTarget, target);
  toggleTodoItem(target, className);

  saveTodosToLocalStorage(serializeTodosFromList(todoList));
  resetInput(todoInput);
};
