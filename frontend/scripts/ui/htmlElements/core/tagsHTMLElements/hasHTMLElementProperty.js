import { assertIsHTMLTagElement, assertIsString } from "@asserts";

export const hasHTMLElementProperty = (el, propName) => {
  assertIsHTMLTagElement(el, "first argument");
  assertIsString(propName, "second argument");
  return propName in el;
};
