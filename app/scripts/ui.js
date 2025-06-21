"use strict";

import { trim } from "./utils.js";

export const showValidMessage = (element, message) => {
  element.textContent = message;
};

export const getTrimmedValue = (input) => trim(input.value);
