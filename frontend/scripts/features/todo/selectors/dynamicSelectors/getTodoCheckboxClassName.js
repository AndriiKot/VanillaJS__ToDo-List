import { assertIsHTMLClassName } from '@asserts';

/**
 * Returns the class name for a checked todo list item.
 * @returns {string}
 */

export const getTodoCheckboxClassName = () => {
  const className = 'todo__check';
  assertIsHTMLClassName(className);
  return className;
};
