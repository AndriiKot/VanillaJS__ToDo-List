import { getTodoItemCheckedClassName } from '@features';

export const serializeTodosFromList = (todoList) => {
  return Array.from(todoList.children, (li) => {
    return {
      text: li.querySelector('.todo__text').textContent,
      checked: li.matches(`.${getTodoItemCheckedClassName()}`),
    };
  });
};
