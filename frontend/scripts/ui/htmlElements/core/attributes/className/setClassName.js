import { assertIsHTMLTagElement, assertIsCSSClassName } from '@asserts';

export const setClassName = (el, className) => {
  assertIsHTMLTagElement(el, 'first argument');
  assertIsCSSClassName(className, 'second argument');
  el.className = className;
};
