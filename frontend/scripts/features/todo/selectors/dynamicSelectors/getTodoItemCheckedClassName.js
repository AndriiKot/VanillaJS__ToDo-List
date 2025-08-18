import { assertIsCSSClassName } from '@asserts';

/**
 * Returns the class name for a checked todo list item.
 * @returns {string}
 */
export const getTodoItemCheckedClassName = () => {
  const className = 'todo__item--checked';
  assertIsCSSClassName(className);
  return className;
};
