import { appendHTMLTagChild } from '@ui';

import {
  createTodoRemoveButton,
  createTodoItemContent,
  createTodoItemLi,
  getTodoItemClassName,
} from '@features';

/**
 * Creates a todo item element with provided text and default class.
 *
 * @param {string} text - The text content of the todo item.
 * @return {HTMLLIElement} The todo item element.
 */

export const createTodoItem = (text) => {
  const className = getTodoItemClassName();
  const taskElement = createTodoItemLi(className);
  appendHTMLTagChild(taskElement, createTodoItemContent(text));
  appendHTMLTagChild(taskElement, createTodoRemoveButton());

  return taskElement;
};
