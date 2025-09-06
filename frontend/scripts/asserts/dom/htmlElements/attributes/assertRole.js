import { isValidAttributeRoles } from '@ui';

/**
 * Asserts that a given string is a valid ARIA role for a DOM element.
 *
 * This function is intended to be used when assigning ARIA roles to elements
 * in the DOM that are instances of `Element`, including:
 *   - `HTMLElement` (e.g., <div>, <span>, <button>)
 *   - `SVGElement` (e.g., <svg>, <circle>)
 *   - `MathMLElement` (e.g., <math>)
 *
 * ARIA roles help make web applications accessible to users with assistive
 * technologies such as screen readers. Using this assertion ensures that
 * only valid ARIA roles are applied to elements, preventing invalid markup.
 *
 * The function internally uses `isValidAttributeRoles` to check the validity
 * of the role and will throw an error if the role is invalid.
 *
 * @param {string} role - The ARIA role to assert (e.g., 'button', 'navigation').
 * @throws {TypeError} If `role` is not a string.
 * @throws {Error} If `role` is not a valid ARIA role for a DOM element
 *   (HTMLElement, SVGElement, or MathMLElement).
 * @returns {void} Does not return a value; throws an error if the role is invalid.
 *
 * @example
 * const button = document.createElement('button');
 * assertRole('button'); // ✅ no error
 * button.setAttribute('role', 'button');
 *
 * const div = document.createElement('div');
 * assertRole('banana'); // ❌ throws Error with message: '"banana" is not a valid ARIA role for a DOM element'
 */
export const assertRole = (role) => {
  if (!isValidAttributeRoles(role)) {
    throw new Error(
      `"${role}" is not a valid ARIA role for a DOM element (HTMLElement, SVGElement, or MathMLElement)`,
    );
  }
};
