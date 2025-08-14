import { getTodoTextList } from './getTodoTextList';

describe('getTodoTextList', () => {
  let ul;

  beforeEach(() => {
    ul = document.createElement('ul');
  });

  test('returns a list of task texts from .todo__text elements', () => {
    ul.innerHTML = `
      <li><span class="todo__text">Task 1</span><span class="todo__remove">×</span></li>
      <li><span class="todo__text">Task 2</span><span class="todo__remove">×</span></li>
      <li><span class="todo__text">Task 3</span><span class="todo__remove">×</span></li>
    `;

    const result = getTodoTextList(ul);
    expect(result).toEqual(['Task 1', 'Task 2', 'Task 3']);
  });

  test('handles an empty <ul> without errors', () => {
    const result = getTodoTextList(ul);
    expect(result).toEqual([]);
  });

  test('returns texts even if there are surrounding spaces', () => {
    ul.innerHTML = `
      <li><span class="todo__text">   Padded   </span></li>
    `;

    const result = getTodoTextList(ul);
    expect(result).toEqual(['   Padded   ']); // no trim, as function does not trim
  });
});
