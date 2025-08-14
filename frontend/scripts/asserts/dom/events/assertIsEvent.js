import { isEvent } from '@ui';
import { throwTypeErrorWithTypeInfo } from '@asserts';

/**
 * Asserts that the given value is an instance of Event.
 *
 * @param {*} value - The value to be checked.
 * @param {string} argName - Optional argument name for error context (default: "value").
 * @throws {TypeError} If the value is not a valid DOM Event.
 */
export const assertIsEvent = (value, argName = 'value') => {
  if (isEvent(value)) return;

  throwTypeErrorWithTypeInfo(value, argName, 'an instance of Event');
};
