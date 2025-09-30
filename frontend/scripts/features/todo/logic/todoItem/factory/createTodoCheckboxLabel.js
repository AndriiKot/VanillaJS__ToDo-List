import { createLabelForInput } from '@ui';
import { getTodoItemTextClassName } from '@features';

/**
 * Creates a <label> element for a todo checkbox input with a predefined class.
 *
 * @param {Object} options
 * @param {string} options.htmlFor - The id of the linked checkbox input
 * @param {string} options.text - The text content of the label
 * @returns {HTMLLabelElement} The created <label> element
 *
 * @example
 * const label = createTodoCheckboxLabel({
 *   htmlFor: 'todo-1',
 *   text: 'Do the dishes'
 * });
 * console.log(label.htmlFor);  // "todo-1"
 * console.log(label.className); // "todo__text"
 * console.log(label.textContent); // "Do the dishes"
 */
export const createTodoCheckboxLabel = ({ htmlFor, text }) => {
  const className = getTodoItemTextClassName();
  const el = createLabelForInput({ htmlFor, text, className });
  return el;
};
