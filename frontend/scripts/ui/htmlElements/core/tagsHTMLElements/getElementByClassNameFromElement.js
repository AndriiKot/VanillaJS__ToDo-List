import { assertIsElement, assertIsString } from '@asserts';
import { getElementBySelectorFromElement } from './getElementBySelectorFromElement'; // путь подкорректируй

/**
 * Gets a valid DOM element by its class name, starting from a provided root element.
 *
 * This function uses `getElementBySelectorFromElement` internally by
 * converting the class name to a CSS class selector.
 *
 * @param {Element} root - The root element (can be HTMLElement, SVGElement, MathMLElement).
 * @param {string} className - The class name of the element to find (without dot).
 * @returns {Element} - The first matched element with the specified class name.
 * @throws {TypeError} - If `root` is not an `Element`, `className` is not a string,
 *                       or no matching element is found.
 */
export const getElementByClassNameFromElement = (root, className) => {
  assertIsElement(root, "Fist argument 'root' must be a valid DOM Element.");
  assertIsString(className, "Second argument 'className' must be a string.");
  return getElementBySelectorFromElement(root, `.${className}`);
};
