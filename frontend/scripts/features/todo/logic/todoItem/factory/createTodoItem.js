import {
  createListItem,
  setListItemClassName,
  setListItemTextContent,
} from "@ui";

import { createTodoRemoveButton } from "@features";

export const createTodoItem = (text, className = "todo__item") => {
  const taskElement = createListItem();
  setListItemClassName(taskElement, className);
  setListItemTextContent(taskElement, text);

  const removeTaskButton = createTodoRemoveButton();
  taskElement.appendChild(removeTaskButton);
  return taskElement;
};
