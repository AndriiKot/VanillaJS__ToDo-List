import { assertIsCSSClassName } from '@asserts';

/**
 * Returns the class name for a checked todo list item.
 * @returns {string}
 */
export const getTodoItemTextClassName = () => {
  const className = 'todo__text';
  assertIsCSSClassName(className);
  return className;
};
