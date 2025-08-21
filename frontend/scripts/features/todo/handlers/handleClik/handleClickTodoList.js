import { serializeTodosFromList, saveTodosToLocalStorage } from '@features';
import { resetInput } from '@ui';
import { toggleTodoItem, getToggleTodoContext } from '@features';

export const handleClickTodoList = (event, todoList, todoInput) => {
  const removeBtn = event.target.closest('.todo__remove');
  if (removeBtn) {
    const li = removeBtn.closest('.todo__item');
    if (li) {
      li.remove();
    }
  }

  const li = event.target.closest('.todo__item');
  if (li && todoList.contains(li)) {
    const { target, className } = getToggleTodoContext(event);

    toggleTodoItem(target, className);
  }
  saveTodosToLocalStorage(serializeTodosFromList(todoList));
  resetInput(todoInput);
};
