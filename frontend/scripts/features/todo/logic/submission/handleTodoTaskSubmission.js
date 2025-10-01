import { isValidTodoInputValue, submitTodoTaskSuccessfully, showNotValidMessage } from '@features';
import { resetInput } from '@ui';

/**
 * Handles the submission of a new todo task.
 *
 * This function validates the input, adds a new task to the todo list if valid,
 * shows an error message if invalid, and always resets the input afterward.
 *
 * @function handleTodoTaskSubmission
 *
 * @param {HTMLInputElement} input - The input element containing the new task text.
 * @param {HTMLUListElement} list - The `<ul>` element that holds todo items.
 * @param {HTMLElement} todoElementMessage - The element used to display error messages.
 *
 * @example
 * const input = document.querySelector('[data-js-todo-new-task-input]');
 * const list = document.querySelector('[data-js-todo-list]');
 * const errorMessage = document.querySelector('[data-js-todo-error-empty-task]');
 *
 * handleTodoTaskSubmission(input, list, errorMessage);
 *
 * // ✅ If input is "Buy milk" → adds <li> with checkbox, label, and delete button.
 * // ❌ If input is empty or whitespace → shows error message "Task cannot be empty".
 */
export const handleTodoTaskSubmission = (input, list, todoElementMessage) => {
  if (isValidTodoInputValue(input)) {
    submitTodoTaskSuccessfully(list, input);
  } else {
    showNotValidMessage(todoElementMessage, 'Task cannot be empty');
  }
  resetInput(input);
};
