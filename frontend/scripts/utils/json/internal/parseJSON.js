/**
 * @private
 * Parses a JSON string.
 *
 * This is an internal low-level utility function. Do not use it directly.
 * Use higher-level functions that ensure the input is a valid string.
 *
 * @param {string} raw - JSON string to parse
 * @returns {*} Parsed value (any valid JSON type)
 *
 * @throws {SyntaxError} If the string is not valid JSON
 * @throws {TypeError} If the input is not a string
 */
export const parseJSON = (raw) => JSON.parse(raw);
