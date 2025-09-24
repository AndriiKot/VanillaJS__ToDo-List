import { createTodoRemoveButton } from './createTodoRemoveButton';
import { getTodoItemRemoveButtonClassName } from '@features';

describe('createTodoRemoveButton', () => {
  test('creates a button element with correct attributes and content based on task text', () => {
    const taskText = 'Позвонить маме';
    const button = createTodoRemoveButton(taskText);

    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button.className).toBe(getTodoItemRemoveButtonClassName());
    expect(button.textContent).toBe('\u00d7');
    expect(button.getAttribute('aria-label')).toBe(`Delete task: ${taskText}`);
    expect(button.getAttribute('role')).toBe('button');
  });

  test('throws if task is not a non-empty string', () => {
    expect(() => createTodoRemoveButton('')).toThrow();
    expect(() => createTodoRemoveButton(null)).toThrow();
    expect(() => createTodoRemoveButton(undefined)).toThrow();
  });
});
