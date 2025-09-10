import { assertIsElement, assertIsHTMLClassName } from '@asserts';

/**
 * Gets the first DOM element with the specified class name, starting from a given root element.
 *
 * This function searches only within the provided root element using
 * `getElementsByClassName` and returns the first match.
 *
 * @param {Element} root - The root element to start the search from.
 * @param {string} className - The class name to search for (without the dot).
 * @returns {Element} - The first element matching the specified class name.
 * @throws {TypeError} - If `root` is not an Element, `className` is not a valid string,
 *                       or no element with the given class name is found.
 */
export const getElementByClassNameFromElement = (root, className) => {
  assertIsElement(root, "First argument 'root' must be a valid DOM Element.");
  assertIsHTMLClassName(className, "Second argument 'className' must be a valid HTML class name.");

  const el = root.getElementsByClassName(className)[0];
  if (!el) {
    throw new TypeError(`No element found with class name '${className}'`);
  }
  return el;
};
