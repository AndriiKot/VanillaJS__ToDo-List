import { createTodoCheckbox } from './createTodoCheckbox';

describe('createTodoCheckbox', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('creates a checkbox input element with correct properties', () => {
    const el = createTodoCheckbox({ id: 'todo-1', checked: true });

    expect(el.tagName).toBe('INPUT');
    expect(el.type).toBe('checkbox');
    expect(el.id).toBe('todo-1');
    expect(el.className).toBe('todo__check');
    expect(el.checked).toBe(true);
  });

  test('defaults checked to false', () => {
    const el = createTodoCheckbox({ id: 'todo-2' });
    expect(el.checked).toBe(false);
  });

  test('throws when id is empty or invalid', () => {
    expect(() => createTodoCheckbox({ id: '' })).toThrow();
    expect(() => createTodoCheckbox({ id: '123bad' })).toThrow();
    expect(() => createTodoCheckbox({ id: null })).toThrow();
    expect(() => createTodoCheckbox({ id: undefined })).toThrow();
  });

  test('throws when checked is not boolean', () => {
    expect(() => createTodoCheckbox({ id: 'todo-3', checked: 'yes' })).toThrow();
    expect(() => createTodoCheckbox({ id: 'todo-4', checked: 1 })).toThrow();
  });
});
