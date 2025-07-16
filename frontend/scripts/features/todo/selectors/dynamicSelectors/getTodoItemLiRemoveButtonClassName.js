import { assertIsValidClassName } from "@asserts";

/**
 * Returns the class name for a remove button todo list item.
 * @returns {string}
 */
export const getTodoItemLiRemoveButtonClassName = () => {
  const className = "todo__item--remove";
  assertIsValidClassName(className);
  return className;
};
