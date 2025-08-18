import { assertIsElement, assertIsHTMLClassName } from '@asserts';

/**
 * Adds a class name to an HTML element.
 *
 * @param {HTMLElement} el - The HTML element to add the class name to.
 * @param {string} className - The class name to add.
 * @throws {TypeError} If el is not an Element (HTMLElement, SVGElement, MathMLElement).
 * @throws {TypeError} If className is not a valid HTML class name.
 * @returns {void} This function does not return a value; it mutates the element by adding a class.
 */
export const addClassName = (el, className) => {
  assertIsElement(el, 'first argument');
  assertIsHTMLClassName(className, 'second argument');
  el.classList.add(className);
};
