import { assertIsElement, assertIsString } from '@asserts';

/**
 * Gets a valid HTML tag element by a CSS selector,
 * starting from a provided root element.
 *
 * This function ensures:
 *  - The root element is a valid HTMLElement.
 *  - The selector provided is a string.
 *  - The element returned is a valid `HTMLElement`.
 *
 * @param {HTMLElement} root - The root element to query within.
 * @param {string} selector - The CSS selector relative to the root element.
 * @returns {HTMLElement} - The matched HTML element.
 * @throws {TypeError} - If `root` is not an HTMLElement, `selector` is not a string,
 *                       or the matched element is not a valid HTMLElement.
 */
export const getHTMLTagElementFromElement = (root, selector) => {
  assertIsElement(root);
  assertIsString(selector);
  const el = root.querySelector(selector);
  assertIsElement(el);
  return el;
};
