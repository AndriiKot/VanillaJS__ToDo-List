import { assertIsString } from '@asserts';
import { isEmpty } from '@utils';

/**
 * Asserts that a value is a valid CSS class name.
 *
 * A valid CSS class name (per CSS Syntax spec):
 * - must be a non-empty string
 * - must not contain spaces
 * - may start with:
 *   - a letter (Unicode)
 *   - an underscore (_)
 *   - or a hyphen (-) followed by a letter/underscore
 * - may only contain letters (Unicode), digits, hyphens (-), and underscores (_)
 *
 * Examples of valid class names:
 *   "header"
 *   "_hidden"
 *   "-dark-theme"
 *   "menu_item-1"
 *   "привет"
 *   "按钮"
 *
 * @param {*} className - The value to validate.
 * @throws {TypeError} - If not a string.
 * @throws {SyntaxError} - If not a valid CSS class name.
 */
export const assertIsCSSClassName = (className) => {
  assertIsString(className, 'CSS class name or HTML class name');

  if (isEmpty(className)) {
    throw new SyntaxError('Class name cannot be empty.');
  }

  if (/\s/.test(className)) {
    throw new SyntaxError(`Class name must not contain spaces: "${className}"`);
  }

  const cssClassRegex = /^-?[_\p{L}][_\p{L}\p{N}-]*$/u;

  if (!cssClassRegex.test(className)) {
    throw new SyntaxError(
      `Invalid class name: "${className}". ` +
        `A valid class name must be a non-empty string without spaces, ` +
        `start with a letter, underscore (_), or hyphen (-), and contain only ` +
        `letters, digits, hyphens (-), and underscores (_). ` +
        `Examples: "header", "_hidden", "-dark-theme", "menu_item-1", "привет", "按钮".`,
    );
  }
};
