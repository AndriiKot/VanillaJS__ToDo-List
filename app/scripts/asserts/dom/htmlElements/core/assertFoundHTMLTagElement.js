import { assertIsHTMLTagElement } from "./assertIsHTMLTagElement.js";

export const assertFoundHTMLTagElement = (el, argName = "value") => {
  assertIsHTMLTagElement(el);
  if (el) return;
  throw new TypeError(`Expected ${argName} to be a <${argName}> HTMLElement`);
};
