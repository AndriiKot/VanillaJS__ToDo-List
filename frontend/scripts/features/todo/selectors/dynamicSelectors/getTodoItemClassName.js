import { assertIsCSSClassName } from '@asserts';

/**
 * Returns the class name for a checked todo list item.
 * @returns {string}
 */

export const getTodoItemClassName = () => {
  const className = 'todo__item';
  assertIsCSSClassName(className);
  return className;
};

