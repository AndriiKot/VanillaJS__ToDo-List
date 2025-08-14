import { assertIsCSSClassName } from "@asserts";

/**
 * Returns the class name for a remove button todo list item.
 * @returns {string}
 */
export const getTodoItemLiRemoveButtonClassName = () => {
  const className = "todo__remove";
  assertIsCSSClassName(className);
  return className;
};
