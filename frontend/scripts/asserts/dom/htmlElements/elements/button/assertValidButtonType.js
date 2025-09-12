import { VALID_BUTTON_TYPES } from '@ui';

/**
 * Asserts that a value is one of the valid <button> types.
 * Allowed values: 'button', 'submit', 'reset' (case-sensitive).
 *
 * This function checks the value exactly as provided. It does **not**
 * normalize the case, so 'Button' or 'SUBMIT' will be considered invalid.
 *
 * @param {string} type - Value to check
 * @throws {TypeError} If type is not one of the allowed button types
 *
 * @example
 * assertValidButtonType('button'); // ✅
 * assertValidButtonType('submit'); // ✅
 * assertValidButtonType('reset');  // ✅
 * assertValidButtonType('Button'); // ❌ throws TypeError
 */
export const assertValidButtonType = (type) => {
  if (VALID_BUTTON_TYPES.includes(type)) return;

  throw new TypeError(
    `Invalid <button> type: "${type}". Must be one of: ${VALID_BUTTON_TYPES.join(', ')}`,
  );
};
