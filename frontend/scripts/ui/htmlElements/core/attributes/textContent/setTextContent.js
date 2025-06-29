import { assertHasTextContent, assertIsString } from "@asserts";

export const setTextContent = (el, text) => {
  assertHasTextContent(el, "first argument");
  assertIsString(text, "second argument");
  el.textContent = text;
};
