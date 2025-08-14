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

    const listItem = list.children[0];
    const [textNode, span] = listItem.childNodes;

    // Check task text
    expect(textNode.textContent).toBe('Learn Testing');

    // Check delete button
    expect(span).toBeInstanceOf(HTMLElement);
    expect(span.textContent).toBe('×');
    expect(span.getAttribute('aria-label')).toBe('Delete task');
    expect(span.getAttribute('role')).toBe('button');

    // Check that input field was cleared
    expect(input.value).toBe('');

    // Check that the validation message is cleared
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
