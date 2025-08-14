import { getHTMLTagElement } from '@ui';
import { assertIsInputElement } from '@asserts';

/**
 * Returns the <input> element used for todos.
 * Asserts that the element exists and is a valid <input> element.
 *
 * @returns {HTMLInputElement}
 */

export const getTodoInput = (className) => {
  const el = getHTMLTagElement(className);
  assertIsInputElement(el);
  return el;
};
