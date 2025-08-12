import {
  createListItem,
  setListItemClassName,
  setListItemTextContent,
  appendHTMLTagChild,
} from "@ui";

import { createTodoRemoveButton } from "@features";

export const createTodoItem = (text, className = "todo__item") => {
  const taskElement = createListItem();
  setListItemClassName(taskElement, className);
  setListItemTextContent(taskElement, text);

  const removeTaskButton = createTodoRemoveButton();
  appendHTMLTagChild(taskElement, removeTaskButton);
  return taskElement;
};
