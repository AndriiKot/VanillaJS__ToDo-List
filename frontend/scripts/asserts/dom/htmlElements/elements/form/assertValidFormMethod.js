// asserts/assertValidFormMethod.js

import { VALID_METHODS_ATTRIBUTE } from '@ui';
import { throwTypeErrorWithTypeInfo } from '@asserts';

/**
 * Asserts that the provided form method is valid.
 *
 * Allowed values: 'get', 'post'.
 *
 * @param {string} method - The method to validate
 * @throws {TypeError} If the method is not valid
 */
export const assertValidFormMethod = (method) => {
  if (VALID_METHODS_ATTRIBUTE.includes(method)) return;

  throwTypeErrorWithTypeInfo(method, 'method', `one of: ${VALID_METHODS_ATTRIBUTE.join(', ')}`);
};
