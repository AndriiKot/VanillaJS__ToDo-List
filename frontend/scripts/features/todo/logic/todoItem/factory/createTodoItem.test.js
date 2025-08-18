import { createTodoItem } from './createTodoItem';

describe('createTodoItem', () => {
  test('creates a <li> element with provided text and default class', () => {
    const li = createTodoItem('Buy milk');

    // Check that li is created and has the correct class
    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.className).toBe('todo__item');

    // Check the span containing the todo text
    const textSpan = li.querySelector('.todo__text');
    expect(textSpan).toBeInstanceOf(HTMLSpanElement);
    expect(textSpan.textContent).toBe('Buy milk');

    // Check the remove button span
    const removeSpan = li.querySelector('.todo__remove');
    expect(removeSpan).toBeInstanceOf(HTMLSpanElement);
    expect(removeSpan.textContent).toBe('\u00d7');
    expect(removeSpan.className).toBe('todo__remove');
    expect(removeSpan.getAttribute('aria-label')).toBe('Delete task');
    expect(removeSpan.getAttribute('role')).toBe('button');
  });

  test('creates a <li> element with empty string text', () => {
    const li = createTodoItem('');
    
    // Check that the span exists and contains empty text
    const textSpan = li.querySelector('.todo__text');
    expect(textSpan.textContent).toBe('');
  });
});
