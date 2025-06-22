"use strict";

import { trim } from "./utils.js";

export const showNotValidMessage = (element, message) => {
  element.textContent = message;
};

export const hiddenNotValidMessage = (element) => {
  return showNotValidMessage(element, "");
};

export const getTrimmedValue = (input) => trim(input.value);
