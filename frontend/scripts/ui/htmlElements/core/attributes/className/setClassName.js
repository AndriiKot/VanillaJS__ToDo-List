import { assertIsElement, assertIsHTMLClassName } from '@asserts';

/**
 * Sets (overwrites) the class name of an HTML element.
 *
 * @param {HTMLElement} el - The HTML element to set the class name on.
 * @param {string} className - The new class name to assign.
 * @throws {TypeError} If el is not an Element (HTMLElement, SVGElement, MathMLElement).
 * @throws {TypeError} If className is not a valid HTML class name.
 * @note This will replace all existing class names on the element.
 * @returns {void} This function does not return a value; it mutates the element by replacing its class list.
 */
export const setClassName = (el, className) => {
  assertIsElement(el, 'first argument');
  assertIsHTMLClassName(className, 'second argument');
  el.className = className;
};
