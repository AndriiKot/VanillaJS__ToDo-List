import { setTextContent } from "@ui";
import { assertIsListItemLiElement } from "@asserts";

export const setListItemTextContent = (li, text) => {
  assertIsListItemLiElement(li, "first argument");
  setTextContent(li, text);
};
