import { assertIsElement, assertIsString } from '@asserts';

/**
 * Gets a valid DOM element by a CSS selector,
 * starting from a provided root element.
 *
 * This function ensures:
 *  - The root element is a valid `Element` (e.g., HTMLElement, SVGElement, MathMLElement).
 *  - The selector provided is a string.
 *  - The element returned is a valid `Element`.
 *
 * @param {Element} root - The root element (can be HTMLElement, SVGElement, MathMLElement).
 * @param {string} selector - The CSS selector relative to the root element.
 * @returns {Element} - The matched element.
 * @throws {TypeError} - If `root` is not an `Element`, `selector` is not a string,
 *                       or the matched element is not a valid `Element`.
 */
export const getElementBySelectorFromElement = (root, selector) => {
  assertIsElement(root);
  assertIsString(selector);
  const el = root.querySelector(selector);
  assertIsElement(el);
  return el;
};
