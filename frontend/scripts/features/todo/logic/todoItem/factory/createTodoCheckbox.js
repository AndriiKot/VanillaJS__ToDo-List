import { createInputElement } from '@ui';
import { assertIsHTMLClassName, assertIsHTMLId } from '@asserts';

/**
 * Creates a checkbox (or other type) input element for a todo item.
 *
 * @param {Object} options
 * @param {string} [options.type='text'] - Input type (must be valid HTML input type)
 * @param {string} options.id - Non-empty, valid HTML id
 * @param {string} options.className - Non-empty, valid HTML class name
 * @returns {HTMLInputElement} The created <input> element
 *
 * @throws {TypeError|SyntaxError} If type, id, or className are invalid
 *
 * @example
 * const checkbox = createTodoCheckbox({
 *   type: 'checkbox',
 *   id: 'todo-1',
 *   className: 'todo__checkbox'
 * });
 * console.log(checkbox.id); // "todo-1"
 * console.log(checkbox.className); // "todo__checkbox"
 */
export const createTodoCheckbox = ({ type = 'checkbox', id = '', className = '' }) => {
  const el = createInputElement(type);

  assertIsHTMLClassName(className);
  assertIsHTMLId(id);

  el.id = id;
  el.className = className;

  return el;
};
