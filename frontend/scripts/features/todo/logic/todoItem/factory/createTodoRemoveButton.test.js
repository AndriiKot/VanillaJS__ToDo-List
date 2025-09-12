import { createTodoRemoveButton } from './createTodoRemoveButton';
import { getTodoItemRemoveButtonClassName } from '@features';

describe('createTodoRemoveButton', () => {
  test('creates a button element with correct attributes and content', () => {
    const button = createTodoRemoveButton();

    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button.className).toBe(getTodoItemRemoveButtonClassName());
    expect(button.textContent).toBe('\u00d7');
    expect(button.getAttribute('aria-label')).toBe('Delete task');
    expect(button.getAttribute('role')).toBe('button');
  });
});
