import {
  createListItem,
  setListItemClassName,
  setListItemTextContent,
} from "@ui";

export const createTodoItem = (text, className = "todo__item") => {
  const li = createListItem();
  setListItemClassName(li, className);
  setListItemTextContent(li, text);
  return li;
};
