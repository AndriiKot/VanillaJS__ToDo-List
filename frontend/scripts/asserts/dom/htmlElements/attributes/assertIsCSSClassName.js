import { assertIsNonEmptyString } from "@asserts";

/**
 * Checks if a value is a valid CSS class name.
 * @param {string} value
 * @param {string} argumentName
 */
export const assertIsCSSClassName = (value, argumentName = "value") => {
  // Validate that value is a non-empty string
  assertIsNonEmptyString(value, argumentName);

  // Unicode-compatible regex for CSS class names
  // Allowed: -, _, letters (Unicode), digits after the first character
  const cssClassRegex = /^-?[_\p{L}][_\p{L}\p{N}-]*$/u;

  if (!cssClassRegex.test(value)) {
    throw new Error(
      `${argumentName} value "${value}" contains invalid characters or starts with an invalid symbol`,
    );
  }
};
