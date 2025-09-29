import { throwTypeErrorWithTypeInfo } from '@asserts';
import { isBoolean } from '@utils';

/**
 * Asserts that the given value is a boolean.
 *
 * @param {*} value - The value to check
 * @param {string} [argName='value'] - Optional name for error message
 * @throws {TypeError} If the value is not boolean
 */
export const assertIsBoolean = (value, argName = 'value') => {
  if (isBoolean(value)) return;
  throwTypeErrorWithTypeInfo(value, argName, 'a boolean');
};
