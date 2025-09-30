import { createTodoItem } from './createTodoItem';

describe('createTodoItem', () => {
  test('creates a <li> element with provided text and default class', () => {
    const li = createTodoItem('Buy milk');

    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.className).toBe('todo__item');

    const label = li.querySelector('.todo__text');
    expect(label).toBeInstanceOf(HTMLLabelElement);
    expect(label.textContent).toBe('Buy milk');

    const checkbox = li.querySelector('input[type="checkbox"]');
    expect(checkbox).toBeInstanceOf(HTMLInputElement);
    expect(checkbox.className).toBe('todo__check');
    expect(checkbox.type).toBe('checkbox');

    const removeButton = li.querySelector('.todo__remove');
    expect(removeButton).toBeInstanceOf(HTMLButtonElement);
    expect(removeButton.textContent).toBe('\u00d7');
    expect(removeButton.className).toBe('todo__remove');
    expect(removeButton.getAttribute('role')).toBe('button');
    expect(removeButton.getAttribute('aria-label')).toContain('Delete task'); // проверяем, что начинается с "Delete task"
  });

  test('checkbox can be created checked', () => {
    const li = createTodoItem('Checked task', true);

    const checkbox = li.querySelector('input[type="checkbox"]');
    expect(checkbox.checked).toBe(true);
  });
});
