import { isListItemLiElement } from "@ui";

export const assertIsListItemLiElement = (el, argName = "value") => {
  if (isListItemLiElement(el)) return;
  throw new TypeError(`Expected ${argName} to be a <li> HTMLElement`);
};
