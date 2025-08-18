import { assertIsHTMLClassName } from '@asserts';

/**
 * Returns the class name for a checked todo list item.
 * @returns {string}
 */

export const getTodoItemClassName = () => {
  const className = 'todo__item';
  assertIsHTMLClassName(className);
  return className;
};
