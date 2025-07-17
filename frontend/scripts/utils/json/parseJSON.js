import { assertIsString } from "@asserts";

/**
 * Parses a JSON string into its corresponding JavaScript value.
 *
 * This is a low-level utility function intended for internal use.
 * It validates that the input is a string before parsing.
 * Use higher-level functions that provide validated input when possible.
 *
 * @param {string} raw - A JSON-formatted string to parse.
 * @returns {*} The parsed JavaScript value represented by the JSON string.
 *
 * @throws {TypeError} If the input `raw` is not a string.
 * @throws {SyntaxError} If the input string is not valid JSON.
 */
export const parseJSON = (raw) => {
  assertIsString(raw, "raw");
  return JSON.parse(raw);
};
