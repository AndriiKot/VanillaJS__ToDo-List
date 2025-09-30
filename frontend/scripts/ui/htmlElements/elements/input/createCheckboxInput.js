import { createInputElement, setAttributesSafe } from '@ui';
import { assertIsHTMLClassName, assertIsHTMLId, assertIsBoolean } from '@asserts';

/**
 * Creates an <input type="checkbox"> element with required id and className.
 *
 * @param {Object} options
 * @param {string} options.id - Non-empty, valid HTML id
 * @param {string} options.className - Non-empty, valid HTML class name
 * @param {boolean} [options.checked=false] - Whether the checkbox is checked
 * @returns {HTMLInputElement} The created checkbox input
 *
 * @throws {TypeError|SyntaxError} If id, className, or checked are invalid
 *
 * @example
 * const checkbox = createCheckboxInput({
 *   id: 'accept-terms',
 *   className: 'form__checkbox',
 *   checked: true
 * });
 * console.log(checkbox.type); // "checkbox"
 * console.log(checkbox.id);   // "accept-terms"
 */
export const createCheckboxInput = ({ id, className, checked = false }) => {
  const el = createInputElement('checkbox');

  assertIsHTMLClassName(className);
  assertIsHTMLId(id);
  assertIsBoolean(
    checked,
    `property "checked" of <input type="checkbox" id="${id}" class="${className}">`,
  );

  setAttributesSafe(el, {
    id,
    class: className,
    checked,
  });
  return el;
};
