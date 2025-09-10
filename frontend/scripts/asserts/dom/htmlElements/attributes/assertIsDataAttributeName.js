import { assertIsString } from '@asserts';
import { isEmpty } from '@utils';

/**
 * Asserts that a value is a valid HTML data-* attribute name.
 *
 * Rules:
 * - must be a non-empty string
 * - must start with "data-"
 * - after "data-", only lowercase letters (a-z), digits (0-9), and hyphens (-) are allowed
 * - must not end with a hyphen (-)
 * - must contain at least one character after "data-"
 *
 * Examples of valid data attribute names:
 *   "data-js-todo-btn-add"
 *   "data-id"
 *   "data-user123"
 *
 * @param {*} attrName - The value to validate.
 * @throws {TypeError} - If not a string.
 * @throws {SyntaxError} - If not a valid data-* attribute name.
 */
export const assertIsDataAttributeName = (attrName) => {
  assertIsString(attrName, 'HTML data-* attribute name');

  if (isEmpty(attrName)) {
    throw new SyntaxError('Data attribute name cannot be empty.');
  }

  // Regex: must start with data-, then only lowercase letters, numbers, and hyphens
  const dataAttrRegex = /^data-[a-z0-9]+(?:-[a-z0-9]+)*$/;

  if (!dataAttrRegex.test(attrName)) {
    throw new SyntaxError(
      `Invalid data-* attribute name: "${attrName}". ` +
        `It must start with "data-", be lowercase, ` +
        `and contain only letters, digits, and hyphens. ` +
        `Examples: "data-js-todo-btn-add", "data-id", "data-user123".`,
    );
  }
};
