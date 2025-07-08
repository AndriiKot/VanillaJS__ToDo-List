import { assertIsString } from "@asserts";
import { isEmpty } from "@utils";

/**
 * Asserts that the given string is a syntactically valid CSS selector.
 * Throws SyntaxError if invalid.
 *
 * @param {*} selector - The value to validate.
 * @throws {TypeError} - If not a string.
 * @throws {SyntaxError} - If not a valid CSS selector.
 */

export const assertIsValidSelector = (selector) => {
  assertIsString(selector);

  if (isEmpty(selector))
    throw new SyntaxError("Selector cannot be an empty string.");

  // Try using the selector in a safe dummy context
  try {
    document.createElement("div").querySelector(selector);
  } catch (err) {
    throw new SyntaxError(
      `Invalid CSS selector: "${selector}". ${err.message}`,
    );
  }
};
