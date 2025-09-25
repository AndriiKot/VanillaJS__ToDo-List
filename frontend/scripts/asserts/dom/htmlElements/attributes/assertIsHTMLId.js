import { assertIsString } from '@asserts';
import { isEmpty } from '@utils';

/**
 * Asserts that a value is a valid HTML id.
 *
 * Rules:
 * - must be a non-empty string
 * - must not contain spaces
 * - recommended: start with letter/underscore/hyphen and contain only
 *   letters, digits, hyphens, underscores (CSS-safe id)
 * - optional: ensure uniqueness in the document
 * - optional: ensure existence in the document
 *
 * @param {*} id - The value to validate.
 * @param {Object} [options]
 * @param {boolean} [options.checkUnique=false] - If true, ensures the ID does not already exist in the document.
 * @param {boolean} [options.mustExist=false] - If true, ensures the ID already exists in the document.
 * @throws {TypeError} - If the value is not a string.
 * @throws {SyntaxError} - If the value is not a valid id or uniqueness check fails.
 * @throws {Error} - If mustExist is true and no element with the given ID is found.
 */
export const assertIsHTMLId = (id, { mode = 'ignore' } = {}) => {
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

  if (typeof document === 'undefined') return;

  const modeHandlers = {
    ignore: () => {},
    unique: () => {
      if (document.getElementById(id)) {
        throw new SyntaxError(`ID must be unique: "${id}" already exists in the document.`);
      }
    },
    mustExist: () => {
      if (!document.getElementById(id)) {
        throw new Error(`No element with id "${id}" exists in the document.`);
      }
    },
  };

  const handler = modeHandlers[mode];
  if (!handler) {
    throw new SyntaxError(`Invalid mode "${mode}". Expected "ignore" | "unique" | "mustExist".`);
  }

  handler();
};
