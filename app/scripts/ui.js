"use strict";

import { trim, isEmpty } from "./utils.js";
import {
  assertHasTextContent,
  assertHasClassName,
  assertIsString,
  assertIsInputElement,
  assertIsListUlElement,
  assertIsListItemLiElement,
} from "./asserts.js";

export const isHTMLTagElement = (el) => {
  return el instanceof HTMLElement;
};

export const isInputElement = (el) => {
  return isHTMLTagElement(el) && el.tagName === "INPUT";
};

export const isListUlElement = (el) => {
  return isHTMLTagElement(el) && el.tagName === "UL";
};

export const isListItemLiElement = (el) => {
  return isHTMLTagElement(el) && el.tagName === "LI";
};

export const getTrimmedInputValue = (input) => trim(getInputValue(input));

export const isValidInputValue = (input) => {
  return !isEmpty(getTrimmedInputValue(input));
};

export const clearInput = (input) => {
  assertIsInputElement(input);
  input.value = "";
};

export const inputFocus = (input) => {
  assertIsInputElement(input);
  input.focus();
};

export const getInputValue = (input) => {
  assertIsInputElement(input);
  return input.value;
};

export const hasTextContent = (el) => {
  return isHTMLTagElement(el) && "textContent" in el;
};

export const setTextContent = (el, text) => {
  assertHasTextContent(el, "first argument");
  assertIsString(text, "second argument");
  el.textContent = text;
};

export const createListItem = () => {
  return document.createElement("li");
};
export const hasClassName = (el) => {
  return isHTMLTagElement(el) && "className" in el;
};

export const getHTMLElementClassName = (el) => {
  assertHasClassName(el);
  return el.className;
};

export const setListItemTextContent = (li, text) => {
  setTextContent(li, text);
};

export const setListItemClassName = (li, text) => {
  assertHasClassName(li, "first argument");
  assertIsString(text, "second argument");
  li.className = text;
};

export const appendTodoItemLi = (list, item) => {
  assertIsListUlElement(list, "first argument");
  assertIsListItemLiElement(item, "second argument");
  list.appendChild(item);
};
