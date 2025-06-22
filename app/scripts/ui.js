"use strict";

import { trim } from "./utils.js";

export const isDomElement = (el) => {
  return el instanceof Element || el instanceof HTMLDocument;
};

export const hasTextContent = (el) => {
  return el instanceof Node && "textContent" in el;
};

export const isInputElement = (el) => {
  return isDomElement(el) && el.tagName === "INPUT";
};

export const showNotValidMessage = (element, message) => {
  element.textContent = message;
};

export const hiddenNotValidMessage = (element) => {
  return showNotValidMessage(element, "");
};

export const getInputValue = (input) => {
  if (!input || typeof input.value !== "string") {
    throw new TypeError("Expected an input element with a value property");
  }
  return input.value;
};

export const clearInput = (input) => (input.value = "");

export const getTrimmedInputValue = (input) => trim(getInputValue(input));
