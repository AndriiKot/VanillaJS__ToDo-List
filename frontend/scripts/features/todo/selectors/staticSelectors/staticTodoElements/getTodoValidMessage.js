import { getHTMLTagElement } from "@ui";
import { assertIsDivElement } from "@asserts";

/**
 * Returns a <div> element with the given class selector.
 *
 * Ensures that:
 * - the element exists in the DOM,
 * - the element is of type <div>.
 *
 * @param {string} className - The CSS selector used to locate the element
 * @returns {HTMLDivElement} - The validated <div> element
 * @throws {TypeError} - If the element does not exist or is not a <div>
 */

export const getTodoValidMessage = (className) => {
  const el = getHTMLTagElement(className);
  assertIsDivElement(el);
  return el;
};
