import { assertIsString, assertIsHTMLTagElement } from '@asserts';

export const getHTMLTagElementFromDocument = (selector) => {
  assertIsString(selector);
  const el = document.querySelector(selector);
  assertIsHTMLTagElement(el);
  return el;
};
