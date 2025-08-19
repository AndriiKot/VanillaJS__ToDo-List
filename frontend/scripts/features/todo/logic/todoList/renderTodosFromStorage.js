import { appendListItemLi } from '@ui';
import { initTodoItemFromStorage } from '@features';

/**
 * Renders an array of todo objects from localStorage into the page's todo list.
 *
 * @param {HTMLElement} todoList - The `<ul>` element on the page where todos will be appended.
 *                                 Typically retrieved using a DOM query like `document.querySelector('.todo__list')`.
 * @param {Array<Object>} todos - Array of todo objects loaded from localStorage.
 *                                Each object should have the shape: `{ text: string, checked: boolean }`.
 *
 * @example
 * const todoList = document.querySelector('.todo__list');
 * const storedTodos = loadTodos(); // returns array of { text, checked } objects from localStorage
 * renderTodosFromStorage(todoList, storedTodos);
 */

export const renderTodosFromStorage = (todoListElement, todosDataArray) => {
  todosDataArray.forEach((todo) =>
    appendListItemLi(todoListElement, initTodoItemFromStorage(todo)),
  );
};
