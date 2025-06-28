import { assertHasClassName, assertIsString } from "@asserts";

export const getElement = (selector) => {
  assertIsString(selector);
  return document.querySelector(selector);
};

export const getHTMLElementClassName = (el) => {
  assertHasClassName(el);
  return el.className;
};
