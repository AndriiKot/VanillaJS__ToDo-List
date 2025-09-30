import { createTodoCheckboxLabel } from './createTodoCheckboxLabel';

describe('createTodoCheckboxLabel', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('creates a <label> element with correct properties', () => {
    const label = createTodoCheckboxLabel({
      htmlFor: 'todo-1',
      text: 'Do the dishes',
    });

    expect(label).toBeInstanceOf(HTMLLabelElement);
    expect(label.htmlFor).toBe('todo-1');
    expect(label.className).toBe('todo__text');
    expect(label.textContent).toBe('Do the dishes');
  });

  test('throws if htmlFor is invalid', () => {
    expect(() => createTodoCheckboxLabel({ htmlFor: '', text: 'Test' })).toThrow();

    expect(() => createTodoCheckboxLabel({ htmlFor: '123bad', text: 'Test' })).toThrow();
  });

  test('throws if text is empty', () => {
    expect(() => createTodoCheckboxLabel({ htmlFor: 'todo-2', text: '' })).toThrow();
  });
});
