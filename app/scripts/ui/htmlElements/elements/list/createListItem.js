import { assertIsListItemLiElement } from "@asserts";

export const createListItem = () => {
  const li = document.createElement("li");
  assertIsListItemLiElement(li);
  return li;
};
