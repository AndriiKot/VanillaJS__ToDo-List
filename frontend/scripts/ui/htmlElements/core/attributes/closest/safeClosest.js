import { assertClosest } from '@asserts';

/**
 * Safely finds the closest ancestor (including the element itself) that matches the selector.
 *
 * @param {*} element - The element to start searching from.
 * @param {*} selector - A string selector to match.
 * @returns {Element} The matched element.
 * @throws {TypeError} If arguments are invalid or no match is found.
 */
export const safeClosest = (element, selector) => {
  return assertClosest(element, selector);
};
