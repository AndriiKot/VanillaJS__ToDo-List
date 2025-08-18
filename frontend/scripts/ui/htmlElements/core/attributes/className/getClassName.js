import { assertIsElement } from '@asserts';

/**
 * Retrieves the class name of an HTML element.
 *
 * @param {HTMLElement} el - The HTML element to retrieve the class name from.
 * @return {string} The class name of the element.
 * If the element has no assigned class, an empty string ("") is returned.
 * @throws {TypeError} If el is not an Element (HTMLElement, SVGElement, MathMLElement).
 */
export const getClassName = (el) => {
  assertIsElement(el);
  return el.className;
};
