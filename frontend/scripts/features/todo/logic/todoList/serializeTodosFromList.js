import { getTodoItemCheckedClassName, getTodoItemTextClassName } from '@features';
import { getTextContent, getElementByClassNameFromElement } from '@ui';

export const serializeTodosFromList = (todoList) => {
  return Array.from(todoList.children, (li) => {
    return {
      text: getTextContent(getElementByClassNameFromElement(li, getTodoItemTextClassName())),
      checked: li.matches(`.${getTodoItemCheckedClassName()}`),
    };
  });
};
