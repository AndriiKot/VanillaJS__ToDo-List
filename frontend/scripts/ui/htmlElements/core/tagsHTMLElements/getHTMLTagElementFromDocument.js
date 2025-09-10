import { assertIsString, assertIsElement } from '@asserts';

/**
 * Gets a valid DOM element from the document by a CSS selector.
 *
 * This function ensures:
 *  - The selector provided is a string.
 *  - The element returned is a valid `Element` (e.g., HTMLElement, SVGElement, MathMLElement).
 *
 * @param {string} selector - The CSS selector used to query the document.
 * @returns {Element} - The matched element.
 * @throws {TypeError} - If the selector is not a string or the matched element is not a valid `Element`.
 */
export const getHTMLTagElementFromDocument = (selector) => {
  assertIsString(selector);
  const el = document.querySelector(selector);
  assertIsElement(el);
  return el;
};
