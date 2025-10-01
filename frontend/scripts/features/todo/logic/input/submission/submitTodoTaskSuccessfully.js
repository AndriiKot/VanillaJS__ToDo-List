import { clearInputValue } from '@ui';
import { addTodoTaskToList } from '@features';

/**
 * Submits a new todo task by adding it to the list and clearing the input field.
 *
 * This function:
 *   1. Retrieves the trimmed value from the input.
 *   2. Creates a new todo item and appends it to the provided list.
 *   3. Saves the updated list to localStorage (handled inside addTodoTaskToList).
 *   4. Clears the input field after submission.
 *
 * @param {HTMLElement} list - The <ul> element containing the todo items.
 * @param {HTMLInputElement} input - The input element where the user types the new task.
 *
 * @example
 * const todoList = document.querySelector('.todo__list');
 * const todoInput = document.querySelector('.todo__input');
 *
 * submitTodoTaskSuccessfully(todoList, todoInput);
 */
export const submitTodoTaskSuccessfully = (list, input) => {
  addTodoTaskToList(list, input);
  clearInputValue(input);
};
