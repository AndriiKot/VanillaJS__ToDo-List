import { assertIsHTMLTagElement } from '@asserts';
import { classNameToSelector } from '@ui';

/**
 * Queries the given element for an element with the specified class name.
 *
 * @param {HTMLElement} el - The element to query.
 * @param {string} className - The class name to search for.
 * @return {HTMLElement|null} - The first element that matches the given class name, or null if no match is found.
 */

export const queryClassNameInElement = (el, className) => {
  assertIsHTMLTagElement(el, 'Element');
  const selector = classNameToSelector(className);
  return el.querySelector(selector) || null;
};
