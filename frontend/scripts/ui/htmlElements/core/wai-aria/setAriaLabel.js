import { assertIsElement, assertIsNonEmptyString } from '@asserts';

/**
 * Sets the `aria-label` attribute on a DOM element for accessibility (ARIA).
 *
 * This function can be used on any element that is an instance of `Element`,
 * including:
 *   - `HTMLElement` (e.g., <div>, <span>, <button>)
 *   - `SVGElement` (e.g., <svg>, <circle>)
 *   - `MathMLElement` (e.g., <math>)
 *
 * `aria-label` provides an accessible name for an element. It is especially
 * useful when an element has no visible text label (e.g., an icon button).
 *
 * @param {Element} el - The DOM element on which to set the `aria-label` attribute.
 * @param {string} label - The non-empty string label to assign.
 * @throws {TypeError} If `el` is not an Element (HTMLElement, SVGElement, MathMLElement).
 * @throws {Error} If `label` is not a string or is an empty string.
 * @returns {void} This function does not return a value; it mutates the element by setting its `aria-label` attribute.
 */
export const setAriaLabel = (el, label) => {
  assertIsElement(el, 'First argument');
  assertIsNonEmptyString(label, 'Second argument (aria-label value)');
  el.setAttribute('aria-label', label);
};
