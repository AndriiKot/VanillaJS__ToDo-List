import { serializeTodosFromList, saveTodosToLocalStorage } from '@features';
import { resetInput, getElementTarget, findClosestByClassName } from '@ui';
import {
  toggleTodoItem,
  getToggleTodoContext,
  getTodoItemRemoveButtonClassName,
  getTodoItemClassName,
} from '@features';

/**
 * Handles a click event on a todo list.
 *
 * Removes a todo item if the event target is a remove button.
 * Toggles a todo item if the event target is a todo item.
 * Saves the current state of the todo list to local storage.
 * Resets the todo input field.
 *
 * @param {Event} event The event that triggered the function.
 * @param {HTMLElement} todoList The todo list element.
 * @param {HTMLElement} todoInput The todo input field element.
 */
export const handleClickTodoList = (event, todoList, todoInput) => {
  const target = getElementTarget(event);
  const removeBtn = findClosestByClassName(target, getTodoItemRemoveButtonClassName());

  if (removeBtn) {
    const li = findClosestByClassName(removeBtn, getTodoItemClassName());
    if (li) {
      li.remove();
    }
  }
  const li = findClosestByClassName(target, getTodoItemClassName());
  if (!removeBtn && li) {
    const { target, className } = getToggleTodoContext(event);
    toggleTodoItem(target, className);
  }

  saveTodosToLocalStorage(serializeTodosFromList(todoList));
  resetInput(todoInput);
};
