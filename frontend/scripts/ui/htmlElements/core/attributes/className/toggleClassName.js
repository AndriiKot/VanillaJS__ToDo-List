import { assertIsElement, assertIsHTMLClassName } from '@asserts';

/**
 * Toggles a class name on an HTML element.
 *
 * @param {HTMLElement} el - The HTML element to toggle the class name on.
 * @param {string} className - The class name to toggle.
 * @throws {TypeError} If el is not an Element (HTMLElement, SVGElement, MathMLElement).
 * @throws {TypeError} If className is not a valid HTML class name.
 * @return {void} This function does not return a value; it mutates the element by adding or removing a class.
 */
export const toggleClassName = (el, className) => {
  assertIsElement(el, 'first argument');
  assertIsHTMLClassName(className, 'second argument');
  el.classList.toggle(className);
};
