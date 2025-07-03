import { assertSupportsTextContent, assertIsString } from "@asserts";

export const setTextContent = (el, text) => {
  assertSupportsTextContent(el, "first argument");
  assertIsString(text, "second argument");
  el.textContent = text;
};
