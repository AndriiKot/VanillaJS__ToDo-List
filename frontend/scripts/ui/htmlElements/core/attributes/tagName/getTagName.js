import { assertIsHTMLTagElement } from "@asserts";

/**
 * Returns the tag name of a given HTML element.
 * @param {HTMLElement} el - The DOM element to extract the tag name from.
 * @returns {string} The tag name in uppercase, e.g., "DIV", "UL", "INPUT".
 * @throws {TypeError} If the provided value is not an instance of HTMLElement.
 */

export const getTagName = (el) => {
  assertIsHTMLTagElement(el, "first argument");
  return el.tagName;
};
