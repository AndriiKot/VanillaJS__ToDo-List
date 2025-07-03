import { assertIsHTMLTagElement } from "@asserts";

export const getClassName = (el) => {
  assertIsHTMLTagElement(el);
  return el.className;
};
