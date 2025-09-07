import { setTextContent, setClassName, createSpanElement, setRole, setAriaLabel } from '@ui';
import { getTodoItemRemoveButtonClassName } from '@features';

/**
 * Creates a remove button element for a todo item.
 *
 * This button is represented as a `<span>` element styled with the appropriate
 * class name and configured with accessibility attributes.
 *
 * Details:
 * - The span contains the "×" symbol (U+00D7) as its visible text content.
 * - The span is assigned a class name from `getTodoItemRemoveButtonClassName()`
 *   to apply the correct styling.
 * - The span is given an `aria-label="Delete task"` attribute to ensure that
 *   screen readers announce it as "Delete task" instead of "×".
 * - The span is assigned `role="button"` to indicate its interactive purpose
 *   to assistive technologies.
 *
 * @returns {HTMLSpanElement} A `<span>` element configured as a remove button
 *   for a todo item.
 */
export const createTodoRemoveButton = () => {
  const span = createSpanElement();
  setClassName(span, getTodoItemRemoveButtonClassName());
  setTextContent(span, '\u00d7');

  setAriaLabel(span, 'Delete task');
  setRole(span, 'button');

  return span;
};
