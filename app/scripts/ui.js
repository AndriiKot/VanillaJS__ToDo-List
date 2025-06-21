"use strict";

import { trim } from "./utils.js";

export const showError = (element, message) => {
  element.textContent = message;
};

export const focusInput = (input) => {
  input.focus();
};

export const getTrimmedValue = (input) => trim(input.value);
