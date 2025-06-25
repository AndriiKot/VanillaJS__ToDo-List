import { assertIsListUlElement, assertIsListItemLiElement } from "../asserts/";

export const appendTodoItemLi = (list, item) => {
  assertIsListUlElement(list, "first argument");
  assertIsListItemLiElement(item, "second argument");
  list.appendChild(item);
};
