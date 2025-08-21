import { serializeTodosFromList } from './serializeTodosFromList';

describe('serializeTodosFromList', () => {
  let ul;

  beforeEach(() => {
    ul = document.createElement('ul');
  });

  test('returns a list of task objects with text and checked properties', () => {
    ul.innerHTML = `
      <li><span class="todo__text">Task 1</span><span class="todo__remove">×</span></li>
      <li><span class="todo__text">Task 2</span><span class="todo__remove">×</span></li>
      <li><span class="todo__text">Task 3</span><span class="todo__remove">×</span></li>
    `;

    const result = serializeTodosFromList(ul);
    expect(result).toEqual([
      { text: 'Task 1', checked: false },
      { text: 'Task 2', checked: false },
      { text: 'Task 3', checked: false },
    ]);
  });

  test('handles an empty <ul> without errors', () => {
    const result = serializeTodosFromList(ul);
    expect(result).toEqual([]);
  });

  test('returns texts correctly even with surrounding spaces', () => {
    ul.innerHTML = `
      <li><span class="todo__text">   Padded   </span></li>
    `;

    const result = serializeTodosFromList(ul);
    expect(result).toEqual([{ text: '   Padded   ', checked: false }]);
  });
});
