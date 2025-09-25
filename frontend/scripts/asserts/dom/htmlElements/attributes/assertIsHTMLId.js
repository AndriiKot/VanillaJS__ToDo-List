import { assertIsString } from '@asserts';
import { isEmpty } from '@utils';

/**
 * Asserts that a value is a valid HTML id.
 *
 * Rules:
 * - must be a non-empty string
 * - must not contain spaces
 * - should be unique within the document (optional runtime check)
 * - recommended: start with letter/underscore/hyphen and contain only
 *   letters, digits, hyphens, underscores (CSS-safe id)
 *
 * @param {*} id - The value to validate.
 * @param {Object} [options]
 * @param {boolean} [options.checkUnique=false] - If true, also check uniqueness in document.
 * @throws {TypeError} - If not a string.
 * @throws {SyntaxError} - If not a valid id.
 */
export const assertIsHTMLId = (id, { checkUnique = false } = {}) => {
  assertIsString(id, 'HTML id');

  if (isEmpty(id)) {
    throw new SyntaxError('ID cannot be empty.');
  }

  if (/\s/.test(id)) {
    throw new SyntaxError(`ID must not contain spaces: "${id}"`);
  }

  const cssIdRegex = /^-?[_\p{L}][_\p{L}\p{N}-]*$/u;

  if (!cssIdRegex.test(id)) {
    throw new SyntaxError(
      `Invalid id: "${id}". ` +
        `A valid id must be a non-empty string without spaces. ` +
        `Recommended format (CSS-safe): start with a letter, underscore (_), or hyphen (-), ` +
        `and contain only letters, digits, hyphens (-), and underscores (_). ` +
        `Examples: "header", "_root", "-section1", "todo_item-1", "привет", "按钮".`,
    );
  }

  if (checkUnique && typeof document !== 'undefined') {
    const existing = document.getElementById(id);
    if (existing) {
      throw new SyntaxError(`ID must be unique: "${id}" already exists in the document.`);
    }
  }
};
