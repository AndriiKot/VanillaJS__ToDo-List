import { createListItem, setListItemClassName } from "@ui";

export const createTodoItemLi = (className) => {
  const itemLi = createListItem();
  setListItemClassName(itemLi, className);

  return itemLi;
};
