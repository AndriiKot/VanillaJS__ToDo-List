import { handleTodoTaskSubmission } from '@features';

describe('handleTodoTaskSubmission', () => {
  let input, list, message;

  beforeEach(() => {
    input = document.createElement('input');
    list = document.createElement('ul');
    message = document.createElement('div');

    document.body.appendChild(input);
    document.body.appendChild(list);
    document.body.appendChild(message);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('adds task to the list and clears the input if the input is valid', () => {
    input.value = '  Buy milk  ';
    handleTodoTaskSubmission(input, list, message);

    expect(list.children.length).toBe(1);
    const li = list.children[0];

    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.className).toBe('todo__item');

    const checkbox = li.querySelector('input[type="checkbox"]');
    const label = li.querySelector('label.todo__text');
    const button = li.querySelector('button.todo__remove');

    expect(checkbox).toBeInstanceOf(HTMLInputElement);
    expect(label).toBeInstanceOf(HTMLLabelElement);
    expect(label.textContent).toBe('Buy milk');

    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button.textContent).toBe('×');
    expect(button.getAttribute('aria-label')).toBe('Delete task: Buy milk');
    expect(button.getAttribute('role')).toBe('button');

    expect(input.value).toBe('');
    expect(message.textContent).toBe('');
  });

  test('shows an error message if input is empty or whitespace', () => {
    input.value = '   ';
    handleTodoTaskSubmission(input, list, message);

    expect(list.children.length).toBe(0);
    expect(message.textContent).toBe('Task cannot be empty');
    expect(document.activeElement).toBe(input);
  });
});
