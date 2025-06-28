import { isListUlElement } from "@ui";

export const assertIsListUlElement = (el, argName = "value") => {
  if (isListUlElement(el)) return;
  throw new TypeError(`Expected ${argName} to be a <ul> HTMLElement`);
};
