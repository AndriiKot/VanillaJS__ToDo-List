import { assertIsListItemLiElement, assertIsString } from "@asserts";
import { setClassName } from "@ui";

export const setListItemClassName = (li, className) => {
  assertIsListItemLiElement(li, "first argument");
  assertIsString(className, "second argument");
  setClassName(li, className);
};
