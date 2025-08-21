/**
 * @jest-environment jsdom
 */
import { jest } from '@jest/globals';

jest.unstable_mockModule('@features', () => ({
  toggleTodoItem: jest.fn(),
  getToggleTodoContext: jest.fn((event) => ({
    target: event.target,
    currentTarget: event.currentTarget,
    className: event.target.className || '',
  })),
  serializeTodosFromList: jest.fn(() => [{ text: 'mocked task' }]),
  saveTodosToLocalStorage: jest.fn(),
}));

jest.unstable_mockModule('@ui', () => ({
  resetInput: jest.fn(),
}));

// Import the function after mocking dependencies
const { handleClickTodoList } = await import('./handleClickTodoList');
const features = await import('@features');
const ui = await import('@ui');

describe('handleClickTodoList', () => {
  let todoList, todoInput;

  beforeEach(() => {
    document.body.innerHTML = `
      <main class="todo">
        <ul class="todo__list">
          <li class="todo__item">
            <span class="todo__text">task 1</span>
            <span class="todo__remove">×</span>
          </li>
          <li class="todo__item">
            <span class="todo__text">task 2</span>
            <span class="todo__remove">×</span>
          </li>
        </ul>
        <input class="todo__input" type="text" />
      </main>
    `;

    todoList = document.querySelector('.todo__list');
    todoInput = document.querySelector('.todo__input');

    jest.clearAllMocks();
  });

  test('removes an item when clicking on .todo__remove', () => {
    const firstRemoveBtn = todoList.querySelector('.todo__remove');

    handleClickTodoList({ target: firstRemoveBtn, currentTarget: todoList }, todoList, todoInput);

    expect(todoList.querySelectorAll('.todo__item').length).toBe(1);
  });

  test('toggles a task when clicking on .todo__text', () => {
    const firstText = todoList.querySelector('.todo__text');

    handleClickTodoList({ target: firstText, currentTarget: todoList }, todoList, todoInput);

    expect(features.toggleTodoItem).toHaveBeenCalledWith(firstText, firstText.className);
  });

  test('saves tasks to localStorage via saveTodosToLocalStorage', () => {
    const firstRemoveBtn = todoList.querySelector('.todo__remove');

    handleClickTodoList({ target: firstRemoveBtn, currentTarget: todoList }, todoList, todoInput);

    expect(features.serializeTodosFromList).toHaveBeenCalledWith(todoList);
    expect(features.saveTodosToLocalStorage).toHaveBeenCalledWith([{ text: 'mocked task' }]);
    expect(ui.resetInput).toHaveBeenCalledWith(todoInput);
  });
  test('does nothing if clicking outside .todo__item', () => {
    const outside = document.createElement('div');
    handleClickTodoList({ target: outside, currentTarget: todoList }, todoList, todoInput);

    // функции saveTodosToLocalStorage и resetInput всё равно должны вызываться
    expect(features.saveTodosToLocalStorage).toHaveBeenCalled();
    expect(ui.resetInput).toHaveBeenCalled();
  });

  test('does nothing if removeBtn.closest(.todo__item) returns null', () => {
    const fakeRemove = document.createElement('span');
    fakeRemove.className = 'todo__remove';
    handleClickTodoList({ target: fakeRemove, currentTarget: todoList }, todoList, todoInput);

    expect(features.saveTodosToLocalStorage).toHaveBeenCalled();
    expect(ui.resetInput).toHaveBeenCalled();
  });
});
