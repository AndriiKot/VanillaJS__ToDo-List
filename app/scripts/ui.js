"use strict";

import { trim, isEmpty } from "./utils.js";
import {
  assertHasTextContent,
  assertIsString,
  assertIsInputElement,
} from "./asserts.js";

export const isDomElement = (el) => {
  return el instanceof Element || el instanceof HTMLDocument;
};

export const isInputElement = (el) => {
  return isDomElement(el) && el.tagName === "INPUT";
};

export const getTrimmedInputValue = (input) => trim(getInputValue(input));

export const isValidInputValue = (input) => {
  return !isEmpty(getTrimmedInputValue(input));
};

export const clearInput = (input) => {
  assertIsInputElement(input);
  input.value = "";
};

export const getInputValue = (input) => {
  assertIsInputElement(input);
  return input.value;
};

export const hasTextContent = (el) => {
  return isDomElement(el) && "textContent" in el;
};

export const setTextContent = (el, text) => {
  assertHasTextContent(el, "first argument");
  assertIsString(text, "second argument");
  el.textContent = text;
};

export const showNotValidMessage = (element, message) => {
  return setTextContent(element, message);
};

export const hiddenNotValidMessage = (element) => {
  return setTextContent(element, "");
};
