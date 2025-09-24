/**
 * Checks if the given element is an <input> HTML element.
 *
 * @param {*} el - The element to check
 * @returns {boolean} true if el is an <input> element
 */
export const isInputElement = (el) => {
  return el instanceof HTMLInputElement;
};
