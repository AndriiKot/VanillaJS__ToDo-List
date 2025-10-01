import { addTodoTaskToList } from '@features';

describe('addTodoTaskToList', () => {
  let input, list;

  beforeEach(() => {
    document.body.innerHTML = `
      <input type="text" id="todo-input" value="  Buy milk  " />
      <ul id="todo-list"></ul>
    `;
    input = document.getElementById('todo-input');
    list = document.getElementById('todo-list');
  });

  test('adds a trimmed todo item to the list with proper structure', () => {
    addTodoTaskToList(list, input);

    const item = list.querySelector('li.todo__item');
    expect(item).not.toBeNull();

    const checkbox = item.querySelector('input.todo__check');
    expect(checkbox).toBeInstanceOf(HTMLInputElement);
    expect(checkbox.type).toBe('checkbox');

    const label = item.querySelector('label.todo__text');
    expect(label).toBeInstanceOf(HTMLLabelElement);
    expect(label.textContent).toBe('Buy milk');
    expect(label.htmlFor).toBe(checkbox.id);

    const removeBtn = item.querySelector('button.todo__remove');
    expect(removeBtn).toBeInstanceOf(HTMLButtonElement);
    expect(removeBtn.textContent).toBe('×');
    expect(removeBtn.getAttribute('aria-label')).toBe('Delete task: Buy milk');
    expect(removeBtn.getAttribute('role')).toBe('button');
  });

  test('adds multiple items if called multiple times', () => {
    input.value = 'First';
    addTodoTaskToList(list, input);

    input.value = 'Second';
    addTodoTaskToList(list, input);

    const labels = list.querySelectorAll('label.todo__text');
    expect(labels).toHaveLength(2);
    expect(labels[0].textContent).toBe('First');
    expect(labels[1].textContent).toBe('Second');
  });
});
