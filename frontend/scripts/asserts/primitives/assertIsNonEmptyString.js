import { assertIsString } from '@asserts';

/**
 * @param {*} value
 * @param {string} argName - for example: "second argument"
 */

export const assertIsNonEmptyString = (value, argName = 'value') => {
  assertIsString(value, argName);

  if (value.trim() === '') {
    throw new Error(`${argName} must be a non-empty string, but an empty string was provided`);
  }
};
