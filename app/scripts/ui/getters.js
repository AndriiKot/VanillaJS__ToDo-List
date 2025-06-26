import {
  assertIsInputElement,
  assertHasClassName,
  assertIsString,
} from "@asserts";

export const getElement = (selector) => {
  assertIsString(selector);
  return document.querySelector(selector);
};

export const getInputValue = (input) => {
  assertIsInputElement(input);
  return input.value;
};

export const getHTMLElementClassName = (el) => {
  assertHasClassName(el);
  return el.className;
};
