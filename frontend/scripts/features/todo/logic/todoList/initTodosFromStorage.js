import { createTodoItem } from '@features';
export const initTodosFromStorage = ({ text, checked }) => {
  const item = createTodoItem(text);

  if (checked) item.classList.add('todo__item--checked');
  return item;
};
