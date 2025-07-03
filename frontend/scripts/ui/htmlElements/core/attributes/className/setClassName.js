import { assertIsHTMLTagElement, assertIsString } from "@asserts";

export const setClassName = (el, className) => {
  assertIsHTMLTagElement(el, "first argument");
  assertIsString(className, "second argument");
  el.className = className;
};
