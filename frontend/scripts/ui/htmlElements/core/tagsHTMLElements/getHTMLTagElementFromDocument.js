import { assertIsString, assertIsHTMLTagElement } from '@asserts';

/**
 * Gets a valid HTML tag element from the DOM by a CSS selector,
 * starting from the `document` root.
 *
 * This function ensures:
 *  - The selector provided is a string.
 *  - The element returned is a valid `HTMLElement` (not `null`, `SVGElement`, etc.).
 *
 * @param {string} selector - The CSS selector used to query the document.
 * @returns {HTMLElement} - The matched HTML element.
 * @throws {TypeError} - If the selector is not a string or the element is not a valid HTMLElement.
 */
export const getHTMLTagElementFromDocument = (selector) => {
  assertIsString(selector);
  const el = document.querySelector(selector);
  assertIsHTMLTagElement(el);
  return el;
};
