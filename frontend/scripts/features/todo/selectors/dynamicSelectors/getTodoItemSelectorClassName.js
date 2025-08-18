import { makeSelectorClassName } from '@ui';

/**
 * Returns the selector class name for a todo list item.
 * @returns {string}
 */

export const getTodoItemSelectorClassName = () => {
  const selector = '.todo__item';
  return makeSelectorClassName(selector);
};
