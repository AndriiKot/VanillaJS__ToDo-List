import { getTodoItemCheckedClassName } from '@features';
import { getTextContent } from '@ui';

export const serializeTodosFromList = (todoList) => {
  return Array.from(todoList.children, (li) => {
    return {
      text: getTextContent(li.querySelector('.todo__text')),
      checked: li.matches(`.${getTodoItemCheckedClassName()}`),
    };
  });
};
