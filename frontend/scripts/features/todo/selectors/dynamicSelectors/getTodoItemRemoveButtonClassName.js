import { assertIsHTMLClassName } from '@asserts';

/**
 * Returns the class name for a remove button todo list item.
 * @returns {string}
 */
export const getTodoItemRemoveButtonClassName = () => {
  const className = 'todo__remove';
  assertIsHTMLClassName(className);
  return className;
};
