import { assertIsHTMLTagElement, assertIsString } from '@asserts';

export const toggleClassName = (el, className) => {
  assertIsHTMLTagElement(el, 'first argument');
  assertIsString(className, 'second argument');
  el.classList.toggle(className);
};
