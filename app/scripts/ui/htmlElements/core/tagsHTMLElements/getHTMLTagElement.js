import { assertIsString, assertFoundHTMLTagElement } from "@asserts";

export const getHTMLTagElement = (selector) => {
  assertIsString(selector);
  const el = document.querySelector(selector);
  assertFoundHTMLTagElement(el);
  return el;
};
