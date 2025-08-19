import { toggleTodoItem, getToggleTodoContext, serializeTodosFromList } from '@features';
import { safeContains } from '@ui';
import { saveTodosToLocalStorage } from '@features';

export const handleClickItemTodo = (event) => {
  const { target, currentTarget, className } = getToggleTodoContext(event);
  safeContains(currentTarget, target);
  toggleTodoItem(target, className);

  saveTodosToLocalStorage(serializeTodosFromList());
};
