import { assertIsString, assertIsHTMLTagElement } from '@asserts';

export const getHTMLTagElement = (selector) => {
  assertIsString(selector);
  const el = document.querySelector(selector);
  assertIsHTMLTagElement(el);
  return el;
};
