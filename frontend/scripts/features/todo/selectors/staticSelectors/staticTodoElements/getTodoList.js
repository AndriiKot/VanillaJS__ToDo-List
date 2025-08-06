import { getHTMLTagElement } from "@ui";
import { assertIsListUlElement } from "@asserts";

/**
 * Returns a <ul> element with the given class selector.
 *
 * Ensures that:
 * - the element exists in the DOM,
 * - the element is of type <ul>.
 *
 * @param {string} className - The CSS selector used to locate the element
 * @returns {HTMLUListElement} - The validated <ul> element
 * @throws {TypeError} - If the element does not exist or is not a <ul>
 */

export const getTodoList = (className) => {
  const el = getHTMLTagElement(className);
  assertIsListUlElement(el);
  return el;
};
