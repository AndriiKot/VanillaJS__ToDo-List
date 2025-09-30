import { createCheckboxInput } from '@ui';
import { getTodoCheckboxClassName } from '@features';

/**
 * Creates a checkbox <input> element for a todo item with a predefined class.
 * Internally uses {@link createCheckboxInput}.
 *
 * @param {Object} options
 * @param {string} options.id - Unique, valid HTML id for the checkbox (required)
 * @param {boolean} [options.checked=false] - Whether the checkbox should be checked initially
 * @returns {HTMLInputElement} The created <input type="checkbox"> element with class "todo__check"
 *
 * @example
 * const checkbox = createTodoCheckbox({
 *   id: 'todo-1',
 *   checked: true
 * });
 * console.log(checkbox.id);        // "todo-1"
 * console.log(checkbox.className); // "todo__check"
 * console.log(checkbox.checked);   // true
 */
export const createTodoCheckbox = ({ id, checked = false }) => {
  const className = getTodoCheckboxClassName();
  const el = createCheckboxInput({ id, className, checked });
  return el;
};
