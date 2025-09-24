import { VALID_INPUT_TYPES } from '@ui';
/**
 * Asserts that a value is one of the valid <input> types.
 * Allowed values: see VALID_INPUT_TYPES (case-sensitive)
 *
 * @param {string} type - Value to check
 * @throws {TypeError} If type is not one of the allowed input types
 */
export const assertValidInputType = (type) => {
  if (!VALID_INPUT_TYPES.includes(type)) {
    throw new TypeError(
      `Invalid <input> type: "${type}". Must be one of: ${VALID_INPUT_TYPES.join(', ')}`
    );
  }
};

