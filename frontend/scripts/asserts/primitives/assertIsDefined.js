import { throwTypeErrorWithTypeInfo } from '@asserts';

/**
 * Asserts that the given value is neither null nor undefined.
 *
 * @param {*} value - The value to check.
 * @param {string} argName - Name of the argument for error context (default: "value").
 * @param {string} expectedDescription - Description of the expected type (default: "a non-null and non-undefined value").
 * @throws {TypeError} If the value is null or undefined.
 */
export const assertIsDefined = (
  value,
  argName = 'value',
  expectedDescription = 'a non-null and non-undefined value',
) => {
  if (value === null || value === undefined) {
    throwTypeErrorWithTypeInfo(value, argName, expectedDescription);
  }
};
