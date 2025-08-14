import { assertIsNode, assertIsString, assertIsDefined } from '@asserts';
import { describeElement } from '@ui';

/**
 * Asserts that the closest element matching the selector exists from the given element.
 *
 * @param {*} element - The starting element.
 * @param {*} selector - The selector to match.
 * @returns {Element} - The closest matching ancestor.
 * @throws {TypeError} - If arguments are invalid or no match is found.
 */
export const assertClosest = (element, selector) => {
  assertIsNode(element, 'first argument');
  assertIsString(selector, 'second argument');

  const match = element.closest(selector);

  assertIsDefined(
    match,
    `${describeElement(element)}.closest result`,
    `an Element matching selector "${selector}"`,
  );

  return match;
};
