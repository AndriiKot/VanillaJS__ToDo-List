import { assertIsListItemLiElement } from "@asserts";
import { setClassName } from "@ui";

export const setListItemClassName = (li, className) => {
  assertIsListItemLiElement(li);
  setClassName(li, className);
};
