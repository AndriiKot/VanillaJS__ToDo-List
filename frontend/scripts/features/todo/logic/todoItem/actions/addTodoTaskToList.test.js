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

  test('adds a trimmed todo item to the list', () => {
    addTodoTaskToList(list, input);

    const listItems = list.querySelectorAll('li');
    expect(listItems).toHaveLength(1);

    const item = listItems[0];
    const [textNode, span] = item.childNodes;

    expect(item.tagName).toBe('LI');
    expect(item.className).toBe('todo__item');
    expect(textNode.textContent).toBe('Buy milk');

    expect(span).toBeInstanceOf(HTMLElement);
    expect(span.textContent).toBe('×');
    expect(span.getAttribute('aria-label')).toBe('Delete task');
    expect(span.getAttribute('role')).toBe('button');
  });

  test('adds multiple items if called multiple times', () => {
    input.value = 'First';
    addTodoTaskToList(list, input);

    input.value = 'Second';
    addTodoTaskToList(list, input);

    const items = list.querySelectorAll('li');

    expect(items).toHaveLength(2);

    const [firstText, secondText] = [
      items[0].childNodes[0].textContent,
      items[1].childNodes[0].textContent,
    ];

    expect(firstText).toBe('First');
    expect(secondText).toBe('Second');
  });
});
