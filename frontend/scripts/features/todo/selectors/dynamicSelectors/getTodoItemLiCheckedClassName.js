import { assertIsValidClassName } from "@asserts";

/**
 * Returns the class name for a checked todo list item.
 * @returns {string}
 */
export const getTodoItemLiCheckedClassName = () => {
  const className = "todo__item--checked";
  assertIsValidClassName(className);
  return className;
};
