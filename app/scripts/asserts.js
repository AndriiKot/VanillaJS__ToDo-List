"use strict";

import { isString } from "./utils";
import {
  hasTextContent,
  isInputElement,
  hasClassName,
  isListItemLiElement,
  isListUlElement,
} from "./ui";

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
 * Checks that the given value is a DOM element with a className property.
 * @param {*} el - The value to check.
 * @param {string} argName - Optional name of the argument for error message.
 * @throws {TypeError} If the argument is not a DOM element with className.
 */
const assertHasClassName = (el, argName = "value") => {
  if (hasClassName(el)) return;

  let description;
  try {
    description = String(el);
  } catch {
    description = Object.prototype.toString.call(el);
  }

  throw new TypeError(
    `Expected ${argName} to be a DOM element with className, but received ${description} (type: ${typeof el})`,
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

/**
 * Asserts that the argument is a <ul> HTML element.
 * @param {*} el - Element to check.
 * @param {string} argName - Name for error messages (optional).
 * @throws {TypeError} If el is not a <ul> HTMLElement.
 */
const assertIsListUlElement = (el, argName = "value") => {
  if (isListUlElement(el)) return;

  let description;
  try {
    description = String(el);
  } catch {
    description = Object.prototype.toString.call(el);
  }

  throw new TypeError(
    `Expected ${argName} to be a <ul> HTMLElement, but received ${description} (type: ${typeof el})`,
  );
};

/**
 * Asserts that the argument is a <li> HTML element.
 * @param {*} el - Element to check.
 * @param {string} argName - Name for error messages (optional).
 * @throws {TypeError} If el is not a <li> HTMLElement.
 */
const assertIsListItemLiElement = (el, argName = "value") => {
  if (isListItemLiElement(el)) return;

  let description;
  try {
    description = String(el);
  } catch {
    description = Object.prototype.toString.call(el);
  }

  throw new TypeError(
    `Expected ${argName} to be a <li> HTMLElement, but received ${description} (type: ${typeof el})`,
  );
};

export {
  assertIsString,
  assertHasTextContent,
  assertIsInputElement,
  assertHasClassName,
  assertIsListUlElement,
  assertIsListItemLiElement,
};
