import { assertIsString } from '@asserts';
import { ROLES_ATTRIBUTES } from './ROLES_ATTRIBUTES';

/**
 * Checks if a given string is a valid ARIA role.
 *
 * This function can be used to validate ARIA roles that can be assigned
 * to DOM elements, including:
 *   - `HTMLElement` roles (e.g., 'button', 'link', 'checkbox')
 *   - `SVGElement` roles (e.g., 'img', 'graphics-document')
 *   - `MathMLElement` roles (e.g., 'math')
 *
 * @param {string} role - The ARIA role to check (e.g., 'button', 'navigation').
 * @throws {TypeError} If `role` is not a string.
 * @returns {boolean} Returns `true` if the role is valid (exists in `ROLES_ATTRIBUTES`), `false` otherwise.
 *
 * @example
 * isValidAttributeRoles('button'); // true
 * isValidAttributeRoles('banana'); // false
 */
export const isValidAttributeRoles = (role) => {
  assertIsString(role);
  return ROLES_ATTRIBUTES.has(role);
};
