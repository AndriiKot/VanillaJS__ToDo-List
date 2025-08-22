import { assertClosest } from '@asserts';

/**
 * Safely finds the closest ancestor (including the element itself) that matches the selector.
 *
 * Validates the arguments and delegates to `Element.closest`.
 * If no matching ancestor is found, returns `null`.
 *
 * @param {*} element - The element to start searching from.
 * @param {*} selector - A CSS selector string to match.
 * @returns {Element|null} The matched element, or `null` if no match is found.
 * @throws {TypeError} If `element` is not a DOM Element.
 * @throws {SyntaxError} If `selector` is not a valid CSS selector.
 */
export const validatedClosest = (element, selector) => {
  assertClosest(element, selector);
  return element.closest(selector);
};
