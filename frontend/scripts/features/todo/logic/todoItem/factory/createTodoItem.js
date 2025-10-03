import { appendHTMLTagChild } from '@ui';
import {
  createTodoCheckbox,
  createTodoRemoveButton,
  createTodoItemLi,
  getTodoItemClassName,
  generateTodoTaskId,
  createTodoCheckboxLabel,
} from '@features';

/**
 * Creates a single todo list item element (`<li>`) with a checkbox, label, and remove button.
 *
 * @param {string} text - The text content of the todo item.
 * @param {boolean} [isChecked=false] - Whether the checkbox should be initially checked.
 * @returns {HTMLLIElement} The fully constructed todo item element.
 *
 * @example
 * const todoItem = createTodoItem('Do the dishes', true);
 * document.querySelector('#todo-list').appendChild(todoItem);
 * console.log(todoItem.querySelector('input[type="checkbox"]').checked); // true
 * console.log(todoItem.querySelector('label').textContent); // "Do the dishes"
 */
export const createTodoItem = (text, isChecked = false) => {
  const className = getTodoItemClassName();
  const taskElement = createTodoItemLi(className);
  const taskId = generateTodoTaskId();

  appendHTMLTagChild(
    taskElement,
    createTodoCheckbox({
      id: taskId,
      checked: isChecked,
    }),
  );

  appendHTMLTagChild(
    taskElement,
    createTodoCheckboxLabel({
      htmlFor: taskId,
      text: text,
    }),
  );

  appendHTMLTagChild(taskElement, createTodoRemoveButton(text));

  return taskElement;
};
