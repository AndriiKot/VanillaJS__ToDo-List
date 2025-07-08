import { assertIsValidSelectorClassName } from "@asserts";

/**
 * Returns the selector class name for a todo list item.
 * @returns {string}
 */

export const getTodoItemLiSelectorClassName = () => {
  const selector = ".todo__item";
  assertIsValidSelectorClassName(selector);
  return selector;
};
