import { getHTMLTagElement } from "@ui";
import { assertIsButtonElement } from "@asserts";

/**
 * Returns a <button> element with the given class selector.
 *
 * Ensures that:
 * - the element exists in the DOM,
 * - the element is of type <button>.
 *
 * @param {string} className - The CSS selector used to locate the element
 * @returns {HTMLButtonElement} - The validated <button> element
 * @throws {TypeError} - If the element does not exist or is not a <button>
 */

export const getTodoButton = (className) => {
  const el = getHTMLTagElement(className);
  assertIsButtonElement(el);
  return el;
};
