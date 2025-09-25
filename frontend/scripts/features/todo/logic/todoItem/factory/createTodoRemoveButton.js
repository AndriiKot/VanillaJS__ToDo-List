import { setTextContent, setClassName, setRole, setAriaLabel, createButtonElement } from '@ui';
import { getTodoItemRemoveButtonClassName } from '@features';
import { assertIsNonEmptyString } from '@asserts';

/**
 * Creates a remove button element for a todo item.
 *
 * This button is represented as a semantic `<button>` element styled with
 * the appropriate class name and configured with accessibility attributes.
 *
 * Details:
 * - The button contains the "×" symbol (U+00D7) as its visible text content.
 * - The button is assigned a class name from `getTodoItemRemoveButtonClassName()`
 *   to apply the correct styling.
 * - The button is given an `aria-label` describing the task, e.g. "Delete task: Buy milk",
 *   so that screen readers announce it properly.
 * - Although `<button>` already has an implicit role, `role="button"` is set
 *   explicitly to reinforce its interactive purpose for assistive technologies.
 *
 * @param {string} task - The text of the todo task, used in `aria-label` for accessibility.
 * @returns {HTMLButtonElement} A `<button>` element configured as a remove button for the todo item.
 * @throws {TypeError} If `task` is not a non-empty string.
 */

export const createTodoRemoveButton = (task) => {
  assertIsNonEmptyString(task, 'createTodoRemoveButton: task');

  const button = createButtonElement('button');
  setClassName(button, getTodoItemRemoveButtonClassName());
  setTextContent(button, '\u00d7');

  setAriaLabel(button, `Delete task: ${task}`);
  setRole(button, 'button');

  return button;
};
