import { throwTypeErrorWithTypeInfo } from '@asserts';

/**
 * Asserts that the given value is a function.
 *
 * @param {*} value - The value to check.
 * @param {string} argName - Name of the argument for error context (default: "value").
 * @throws {TypeError} If the value is not a function.
 */
export const assertIsFunction = (value, argName = 'value') => {
  if (typeof value !== 'function') {
    throwTypeErrorWithTypeInfo(value, argName, 'a function');
  }
};
