import { createTodoCheckbox } from './createTodoCheckbox';

describe('createTodoCheckbox', () => {
  beforeEach(() => {
    document.body.innerHTML = ''; 
  });

  test('creates input element with correct properties', () => {
    const el = createTodoCheckbox({
      type: 'checkbox',
      id: 'todo-1',
      className: 'todo__checkbox',
    });

    expect(el.tagName).toBe('INPUT');
    expect(el.type).toBe('checkbox');
    expect(el.id).toBe('todo-1');
    expect(el.className).toBe('todo__checkbox');
  });

  test('throws when id is empty or invalid', () => {
    expect(() =>
      createTodoCheckbox({ type: 'checkbox', id: '', className: 'c' }),
    ).toThrow();

    expect(() =>
      createTodoCheckbox({ type: 'checkbox', id: '123bad', className: 'c' }),
    ).toThrow();
  });

  test('throws when className is empty or invalid', () => {
    expect(() =>
      createTodoCheckbox({ type: 'checkbox', id: 'id1', className: '' }),
    ).toThrow();

    expect(() =>
      createTodoCheckbox({ type: 'checkbox', id: 'id1', className: 'bad class' }),
    ).toThrow();
  });

  test('throws when type is invalid', () => {
    expect(() =>
      createTodoCheckbox({ type: 'invalid', id: 'id1', className: 'c' }),
    ).toThrow();
  });

  test('defaults to type="checkbox" if type is omitted', () => {
    const el = createTodoCheckbox({ id: 'todo-2', className: 'todo__checkbox' });
    expect(el.type).toBe('checkbox');
  });
});
