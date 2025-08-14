import { appendHTMLTagChild } from '@ui';

import { createTodoRemoveButton, createTodoItemContent, createTodoItemLi } from '@features';

export const createTodoItem = (text, className = 'todo__item') => {
  const taskElement = createTodoItemLi(className);

  appendHTMLTagChild(taskElement, createTodoItemContent(text));
  appendHTMLTagChild(taskElement, createTodoRemoveButton());

  return taskElement;
};
