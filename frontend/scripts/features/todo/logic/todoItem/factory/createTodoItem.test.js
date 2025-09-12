import { createTodoItem } from './createTodoItem';

describe('createTodoItem', () => {
  test('creates a <li> element with provided text and default class', () => {
    const li = createTodoItem('Buy milk');

    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.className).toBe('todo__item');

    const textSpan = li.querySelector('.todo__text');
    expect(textSpan).toBeInstanceOf(HTMLSpanElement);
    expect(textSpan.textContent).toBe('Buy milk');

    const removeButton = li.querySelector('.todo__remove');
    expect(removeButton).toBeInstanceOf(HTMLButtonElement);
    expect(removeButton.textContent).toBe('\u00d7');
    expect(removeButton.className).toBe('todo__remove');
    expect(removeButton.getAttribute('aria-label')).toBe('Delete task');
    expect(removeButton.getAttribute('role')).toBe('button');
  });

  test('creates a <li> element with empty string text', () => {
    const li = createTodoItem('');

    const textSpan = li.querySelector('.todo__text');
    expect(textSpan.textContent).toBe('');
  });
});
