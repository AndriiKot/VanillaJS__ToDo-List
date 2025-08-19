import { serializeTodosFromList, saveTodosToLocalStorage } from '@features';

export const handleClickDeleteTodoTaskElement = (event) => {
  const target = event.target;

  if (!target.classList.contains('todo__remove')) return;

  const li = target.closest('.todo__item');

  if (li && li.parentElement) {
    li.parentElement.removeChild(li);
  }

  saveTodosToLocalStorage(serializeTodosFromList());
};
