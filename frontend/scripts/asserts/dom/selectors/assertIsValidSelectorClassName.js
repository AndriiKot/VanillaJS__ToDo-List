import { assertIsValidSelector } from "@asserts";

/**
 * Asserts that the given CSS selector is a valid class selector (starts with '.').
 *
 * @param {*} selector - The selector to validate.
 * @throws {TypeError} - If the value is not a string.
 * @throws {SyntaxError} - If the value is not a valid CSS selector or doesn't start with '.'.
 */
export const assertIsValidSelectorClassName = (selector) => {
  assertIsValidSelector(selector);

  if (selector.startsWith(".")) return;

  throw new SyntaxError(`Selector must start with "."`);
};
