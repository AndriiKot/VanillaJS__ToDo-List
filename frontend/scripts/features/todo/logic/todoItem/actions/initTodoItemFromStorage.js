import { createTodoItem, getTodoItemCheckedClassName } from '@features';
import { addClassName } from '@ui';

/**
 * Initializes a todo item from storage.
 *
 * @param {Object} todo - The todo object from storage.
 * @param {string} todo.text - The text of the todo item.
 * @param {boolean} todo.checked - Whether the todo item is checked.
 * @return {HTMLElement} The initialized todo item.
 */
export const initTodoItemFromStorage = ({ text, checked }) => {
  const item = createTodoItem(text);

  if (checked) {
    addClassName(item, getTodoItemCheckedClassName());
  }
  return item;
};
