import { assertIsHTMLId } from '@asserts';
import { assertIsNonEmptyString, assertIsHTMLClassName } from '@asserts';

/**
 * Creates a <label> element with text and links it to a form input via the htmlFor attribute.
 *
 * @param {Object} options
 * @param {string} options.htmlFor - The id of the linked input element (required)
 * @param {string} options.text - The text content of the label (required)
 * @param {string} [options.className] - Optional CSS class name
 * @returns {HTMLLabelElement} The created <label> element
 * @throws {TypeError} If htmlFor or text are invalid, or className is invalid
 * @throws {SyntaxError} If htmlFor is not a valid HTML id
 */
export const createLabelForInput = ({ htmlFor, text, className }) => {
  assertIsHTMLId(htmlFor);
  assertIsNonEmptyString(text, 'createLabelForInput text content');
  assertIsHTMLClassName(className);

  const label = document.createElement('label');
  label.htmlFor = htmlFor;
  label.textContent = text;
  label.className = className;
  return label;
};
