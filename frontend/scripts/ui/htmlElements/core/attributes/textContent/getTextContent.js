import { assertSupportsTextContent } from '@asserts';

/**
 * Safely gets the textContent of an element.
 *
 * @param {Element} el - The DOM element.
 * @returns {string} - The element's text content (empty string if none).
 * @throws {TypeError|SyntaxError} - If the element is invalid or does not support textContent.
 */
export const getTextContent = (el) => {
  assertSupportsTextContent(el);
  return el.textContent;
};
