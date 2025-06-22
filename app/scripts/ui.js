"use strict";

import { trim } from "./utils.js";

export const showNotValidMessage = (element, message) => {
  element.textContent = message;
};

export const hiddenNotValidMessage = (element) => {
  return showNotValidMessage(element, "");
};

export const getInputValue = (input) => input.value;

export const clearInput = (input) => (input.value = "");

export const getTrimmedInputValue = (input) => trim(getInputValue(input));
