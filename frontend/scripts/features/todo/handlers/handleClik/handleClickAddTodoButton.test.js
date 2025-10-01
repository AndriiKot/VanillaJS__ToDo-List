import { handleClickAddTodoButton } from '@features';

describe('handleClickAddTodoButton', () => {
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

  test('adds a task to the list when input is valid', () => {
    input.value = '  Learn Testing  ';

    const handler = handleClickAddTodoButton(input, list, message);
    handler();

    expect(list.children.length).toBe(1);

    const li = list.children[0];
    const [checkbox, label, button] = li.children;

    expect(li.tagName).toBe('LI');
    expect(li.className).toBe('todo__item');

    expect(checkbox).toBeInstanceOf(HTMLInputElement);
    expect(checkbox.type).toBe('checkbox');

    expect(label).toBeInstanceOf(HTMLLabelElement);
    expect(label.textContent).toBe('Learn Testing');
    expect(label.htmlFor).toBe(checkbox.id);

    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button.textContent).toBe('×');
    expect(button.getAttribute('aria-label')).toBe(`Delete task: Learn Testing`);
    expect(button.getAttribute('role')).toBe('button');

    expect(input.value).toBe('');

    expect(message.textContent).toBe('');
  });

  test('shows validation message when input is empty', () => {
    input.value = '   ';

    const handler = handleClickAddTodoButton(input, list, message);
    handler();

    expect(list.children.length).toBe(0);
    expect(message.textContent).toBe('Task cannot be empty');
    expect(document.activeElement).toBe(input);
  });
});
