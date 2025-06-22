"use strict";

import { isString } from "./utils";
import { hasTextContent, isInputElement } from "./ui";

/**
 * @param {*} value
 * @param {string} argName - for example: "second argument"
 */
const assertIsString = (value, argName = "value") => {
  if (isString(value)) return;

  let displayedValue;
  try {
    displayedValue = String(value);
  } catch {
    displayedValue = Object.prototype.toString.call(value); // [object Symbol] or [object BigInt] ...
  }

  throw new TypeError(
    `Expected ${argName} to be a string, but received value ${displayedValue} of type ${typeof value}`,
  );
};

/**
 * Chacks that first argument — DOM-element has textContent.
 * @param {*} el
 * @param {string} argName - for example: "first argument"
 */
const assertHasTextContent = (el, argName = "value") => {
  if (hasTextContent(el)) return;

  let description;
  try {
    description = String(el);
  } catch {
    description = Object.prototype.toString.call(el);
  }

  throw new TypeError(
    `Expected ${argName} to be a DOM element with textContent, but received ${description} of type ${typeof el}`,
  );
};

/**
 * Asserts that the value is a DOM element of type <input>.
 * @param {*} el - The value to check.
 * @throws {TypeError} If the argument is not a valid <input> element.
 */
const assertIsInputElement = (el) => {
  if (isInputElement(el)) return;

  let description;
  try {
    description = String(el);
  } catch {
    description = Object.prototype.toString.call(el);
  }

  throw new TypeError(
    `Expected a DOM element of type <input>, but received ${description} (type: ${typeof el})`,
  );
};

export { assertIsString, assertHasTextContent, assertIsInputElement };
