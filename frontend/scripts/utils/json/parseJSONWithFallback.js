import { parseJSON } from './parseJSON.js';

/**
 * @private
 * Attempts to parse a JSON string and returns a fallback value if parsing fails.
 *
 * This is a low-level utility for working with raw, untrusted JSON strings.
 * It assumes the input has already been validated as a string by the caller.
 *
 * This function does NOT perform type checks. It will throw if used improperly.
 * Designed to be used internally in higher-level modules that enforce input validation.
 *
 * 💡 Example: use it in a validated context like `getParsedItem()` or similar wrappers.
 *
 * @param {*} raw - raw JSON string (assumed to be valid string)
 * @param {*} fallback - fallback value to return if parsing fails (default: null)
 * @returns {*} parsed value or fallback
 */
export const parseJSONWithFallback = (raw, fallback = null) => {
  try {
    return parseJSON(raw);
  } catch (error) {
    console.error(`parseJSONWithFallback: Failed to parse JSON. Raw value:`, raw, error);
    return fallback;
  }
};
