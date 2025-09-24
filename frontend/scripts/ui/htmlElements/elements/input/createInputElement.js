import { assertValidInputType } from '@asserts';
/**
 * Creates an HTML <input> element with the specified type.
 *
 * @param {string} [type='text'] - Type of the input element
 * @returns {HTMLInputElement} The created <input> element
 * @throws {TypeError} If the type is invalid
 */
export const createInputElement = (type = 'text') => {
  assertValidInputType(type);
  const input = document.createElement('input');
  input.type = type;
  return input;
};

