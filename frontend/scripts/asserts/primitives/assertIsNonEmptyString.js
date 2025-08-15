import { assertIsString } from '@asserts';

/**
 * Asserts that a value is a non-empty string.
 * @param {*} value - the value to check
 * @param {string} [argName] - the name of the argument for error messages; defaults to 'value'
 * @throws {Error} if value is not a string or is empty
 */
export const assertIsNonEmptyString = (value, argName) => {
  const nameForError = argName || 'value';
  assertIsString(value, nameForError);

  if (value.trim() === '') {
    throw new Error(`${nameForError} must be a non-empty string, but an empty string was provided`);
  }
};
