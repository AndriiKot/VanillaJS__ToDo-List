/**
 * Checks if the given value is a boolean.
 *
 * @param {*} value - The value to check
 * @returns {boolean} True if value is boolean, otherwise false
 *
 * @example
 * isBoolean(true);  // true
 * isBoolean(false); // true
 * isBoolean(0);     // false
 */
export const isBoolean = (value) => {
  return typeof value === 'boolean';
};

