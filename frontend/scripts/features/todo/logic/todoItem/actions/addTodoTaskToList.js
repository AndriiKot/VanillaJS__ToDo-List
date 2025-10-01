import { getTrimmedInputValue, appendListItemLi } from '@ui';
import { createTodoItem, serializeTodosFromList, saveTodosToLocalStorage } from '@features';

/**
 * Adds a new todo task to the list and persists it to localStorage.
 *
 * Workflow:
 * 1. Reads and trims the value from the input field.
 * 2. Creates a new `<li>` todo item element.
 * 3. Appends the item to the provided list.
 * 4. Serializes the current list into an array of todos.
 * 5. Saves the updated todos array to localStorage.
 *
 * @param {HTMLUListElement} list - The `<ul>` element that contains todo items.
 * @param {HTMLInputElement} input - The input element with the new task text.
 *
 * @example
 * const list = document.querySelector('[data-js-todo-list]');
 * const input = document.querySelector('[data-js-todo-new-task-input]');
 * addTodoTaskToList(list, input);
 */
export const addTodoTaskToList = (list, input) => {
  const taskText = getTrimmedInputValue(input);
  const todoItem = createTodoItem(taskText);
  appendListItemLi(list, todoItem);
  const currentTodos = serializeTodosFromList(list);
  saveTodosToLocalStorage(currentTodos);
};
