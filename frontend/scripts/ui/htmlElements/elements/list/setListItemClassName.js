import { assertIsListItemLiElement, assertIsCSSClassName } from "@asserts";
import { setClassName } from "@ui";

export const setListItemClassName = (li, className) => {
  assertIsListItemLiElement(li, "first argument");
  assertIsCSSClassName(className, "second argument");
  setClassName(li, className);
};
