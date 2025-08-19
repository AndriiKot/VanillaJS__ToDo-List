import { initTodoItemFromStorage, getTodoItemCheckedClassName } from '@features';

describe('initTodoItemFromStorage', () => {
  test('returns an HTMLElement with the correct text', () => {
    const todo = { text: 'Test task', checked: false };
    const element = initTodoItemFromStorage(todo);

    // Select the span that contains the todo text
    const textSpan = element.querySelector('.todo__text');

    expect(element).toBeInstanceOf(HTMLElement);
    expect(textSpan).not.toBeNull();
    expect(textSpan.textContent).toBe('Test task');
  });

  test('adds checked class if todo.checked is true', () => {
    const todo = { text: 'Checked task', checked: true };
    const element = initTodoItemFromStorage(todo);

    const checkedClass = getTodoItemCheckedClassName();
    expect(element.classList.contains(checkedClass)).toBe(true);
  });

  test('does not add checked class if todo.checked is false', () => {
    const todo = { text: 'Unchecked task', checked: false };
    const element = initTodoItemFromStorage(todo);

    const checkedClass = getTodoItemCheckedClassName();
    expect(element.classList.contains(checkedClass)).toBe(false);
  });
});
