import {
  createListItem,
  setListItemClassName,
  setListItemTextContent,
  setTextContent,
  setClassName,
  createSpanElement,
} from "@ui";

import { getTodoItemLiRemoveClassName } from "@features";

export const createTodoItem = (text, className = "todo__item") => {
  const li = createListItem();
  setListItemClassName(li, className);
  setListItemTextContent(li, text);

  const span = createSpanElement();
  setClassName(span, getTodoItemLiRemoveClassName());
  setTextContent(span, "\u00d7");

  span.setAttribute("aria-label", "Delete task");
  span.setAttribute("role", "button");

  li.appendChild(span);
  return li;
};
