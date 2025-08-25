/**
 * @jest-environment jsdom
 */
import { handleTodosChannelMessage } from './handleTodosChannelMessage';

describe('handleTodosChannelMessage', () => {
  let todoList;

  beforeEach(() => {
    document.body.innerHTML = '<ul class="todo__list"></ul>';
    todoList = document.querySelector('.todo__list');

    const li1 = document.createElement('li');
    li1.textContent = 'Old Task 1';
    const li2 = document.createElement('li');
    li2.textContent = 'Old Task 2';
    todoList.appendChild(li1);
    todoList.appendChild(li2);
  });

  test('clears the todoList when type is "update"', () => {
    const data = { type: 'update', todos: [{ text: 'Task 1' }] };

    handleTodosChannelMessage(data, todoList);

    expect(todoList.children.length).toBe(1);
    expect(todoList.textContent).toContain('Task 1');
    expect(todoList.textContent).not.toContain('Old Task 1');
    expect(todoList.textContent).not.toContain('Old Task 2');
  });

  test('does nothing when type is not "update"', () => {
    const data = { type: 'other', todos: [{ text: 'Task 1' }] };

    handleTodosChannelMessage(data, todoList);

    expect(todoList.children.length).toBe(2);
    expect(todoList.textContent).toContain('Old Task 1');
    expect(todoList.textContent).toContain('Old Task 2');
  });
});
