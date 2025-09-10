import { getHTMLTagElementFromDocument } from '@ui';
import { assertIsInputElement } from '@asserts';

/**
 * Returns the <input> element used for todos.
 * Asserts that the element exists and is a valid <input> element.
 *
 * @returns {HTMLInputElement}
 */

export const getTodoInput = (className) => {
  const el = getHTMLTagElementFromDocument(className);
  assertIsInputElement(el);
  return el;
};
