import { assertIsElement, assertRole } from '@asserts';

/**
 * Sets the `role` attribute on a DOM element for accessibility (ARIA).
 *
 * This function can be used on any element that is an instance of `Element`,
 * including:
 *   - `HTMLElement` (e.g., <div>, <span>, <button>)
 *   - `SVGElement` (e.g., <svg>, <circle>)
 *   - `MathMLElement` (e.g., <math>)
 *
 * ARIA roles help make web applications accessible to users with assistive
 * technologies such as screen readers. This function checks that the role
 * is valid before assigning it to the element.
 *
 * @param {Element} el - The DOM element on which to set the `role` attribute.
 * @param {string} role - The ARIA role to assign (e.g., 'button', 'navigation').
 * @throws {TypeError} If `el` is not an Element (HTMLElement, SVGElement, MathMLElement),
 *   or if `role` is not a string.
 * @throws {Error} If `role` is not a valid ARIA role for a DOM element.
 * @returns {void} This function does not return a value; it mutates the element by setting its `role` attribute.
 */
export const setRole = (el, role) => {
  assertIsElement(el, 'first argument');
  assertRole(role, 'second argument');
  el.setAttribute('role', role);
};
