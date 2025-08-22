import { assertIsElement, assertIsValidSelector } from '@asserts';

/**
 * Asserts that the given element has a closest ancestor (including itself)
 * that matches the given CSS selector.
 *
 * @param {Element} element - The element to start searching from.
 * @param {string} selector - A valid CSS selector.
 * @throws {TypeError} - If arguments are invalid.
 * @throws {SyntaxError} - If the selector is invalid.
 */

export const assertClosest = (element, selector) => {
  assertIsElement(element, 'first argument');
  assertIsValidSelector(selector, 'second argument');
};
