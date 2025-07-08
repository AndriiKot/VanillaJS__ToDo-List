import { assertIsString } from "@asserts";
import { isEmpty } from "@utils";

/**
 * Asserts that a value is a valid HTML class name.
 *
 * A valid class name:
 * - must be a non-empty string
 * - must not contain spaces
 * - must start with a letter or underscore
 * - must only contain letters, digits, hyphens (-), and underscores (_)
 *
 * @param {*} className - The value to validate.
 * @throws {TypeError} - If not a string.
 * @throws {SyntaxError} - If not a valid class name.
 */
export const assertIsValidClassName = (className) => {
  assertIsString(className);

  if (isEmpty(className)) {
    throw new SyntaxError("Class name cannot be empty.");
  }

  if (/\s/.test(className)) {
    throw new SyntaxError(`Class name must not contain spaces: "${className}"`);
  }

  const validPattern = /^[a-zA-Z_][\w-]*$/;
  if (!validPattern.test(className)) {
    throw new SyntaxError(
      `Invalid class name: "${className}". ` +
        `A valid class name must start with a letter or underscore, ` +
        `and may only contain letters, digits, hyphens (-), and underscores (_).`,
    );
  }
};
