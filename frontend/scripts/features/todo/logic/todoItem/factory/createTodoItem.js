import { appendHTMLTagChild, createLabelForInput } from '@ui';

import {
  createTodoCheckbox,
  createTodoRemoveButton,
  createTodoItemContent,
  createTodoItemLi,
  getTodoItemClassName,
} from '@features';
import { generateUUID } from '@services';

/**
 * Creates a todo item element with provided text and default class.
 *
 * @param {string} text - The text content of the todo item.
 * @return {HTMLLIElement} The todo item element.
 */

export const createTodoItem = (text) => {
  const className = getTodoItemClassName();
  const taskElement = createTodoItemLi(className);
  const safeTaskId = 'taskId-' + generateUUID();
  appendHTMLTagChild(
    taskElement,
    createTodoCheckbox({ id: safeTaskId, type: 'checkbox', className: 'todo__check' }),
  );
  // appendHTMLTagChild(taskElement, createTodoItemContent(text));
  appendHTMLTagChild(
    taskElement,
    createLabelForInput({ htmlFor: safeTaskId, text: text, className: 'todo__text' }),
  );
  appendHTMLTagChild(taskElement, createTodoRemoveButton(text));

  return taskElement;
};
