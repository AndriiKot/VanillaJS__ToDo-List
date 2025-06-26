import {
  assertHasTextContent,
  assertIsString,
  assertHasClassName,
} from "@asserts";

export const setTextContent = (el, text) => {
  assertHasTextContent(el, "first argument");
  assertIsString(text, "second argument");
  el.textContent = text;
};

export const setListItemTextContent = (li, text) => {
  setTextContent(li, text);
};

export const setListItemClassName = (li, className) => {
  assertHasClassName(li, "first argument");
  assertIsString(className, "second argument");
  li.className = className;
};
