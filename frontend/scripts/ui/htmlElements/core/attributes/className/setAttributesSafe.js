// setAttributesSafe.js
import { setAttributeSafe } from './setAttributeSafe';
import { assertIsElement } from '@asserts';

/**
 * Safely sets multiple attributes on an element.
 *
 * @param {HTMLElement} el - Target element
 * @param {Object} attrs - Key/value pairs of attributes
 * @returns {HTMLElement} The element
 */
export const setAttributesSafe = (el, attrs = {}) => {
  assertIsElement(el);
  Object.entries(attrs).forEach(([key, value]) => {
    setAttributeSafe(el, key, value, { assertElement: false });
  });
  return el;
};
