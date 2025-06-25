import { isInputElement, isListUlElement, isListItemLiElement } from "@ui";

export const assertIsInputElement = (el) => {
  if (isInputElement(el)) return;
  throw new TypeError(
    `Expected a DOM element of type <input>, but got ${typeof el}`,
  );
};

export const assertIsListUlElement = (el, argName = "value") => {
  if (isListUlElement(el)) return;
  throw new TypeError(`Expected ${argName} to be a <ul> HTMLElement`);
};

export const assertIsListItemLiElement = (el, argName = "value") => {
  if (isListItemLiElement(el)) return;
  throw new TypeError(`Expected ${argName} to be a <li> HTMLElement`);
};
