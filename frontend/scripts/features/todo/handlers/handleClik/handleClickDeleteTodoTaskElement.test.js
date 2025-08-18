import { handleClickDeleteTodoTaskElement } from './handleClickDeleteTodoTaskElement';
import { getTodoList, getTodosFromList } from '@features';
import { STORAGE_KEYS } from '@services';

const TODO_LIST_SELECTOR = '.todo__list';

beforeEach(() => {
  document.body.innerHTML = `
    <ul class="todo__list">
      <li class="todo__item">
        <span class="todo__text">Create Docker</span>
        <span class="todo__remove">×</span>
      </li>
      <li class="todo__item">
        <span class="todo__text">Learn Jest</span>
        <span class="todo__remove">×</span>
      </li>
    </ul>
  `;
  localStorage.clear();
});

test('does nothing if clicked target does not have todo__remove class', () => {
  const event = new MouseEvent('click');
  Object.defineProperty(event, 'target', {
    value: document.querySelector(TODO_LIST_SELECTOR),
    enumerable: true,
  });

  expect(() => handleClickDeleteTodoTaskElement(event)).not.toThrow();
  expect(getTodoList(TODO_LIST_SELECTOR).children.length).toBe(2);
});

test('does nothing if closest li.todo__item is null', () => {
  const span = document.createElement('span');
  span.classList.add('todo__remove');

  const event = new MouseEvent('click');
  Object.defineProperty(event, 'target', {
    value: span,
    enumerable: true,
  });

  expect(() => handleClickDeleteTodoTaskElement(event)).not.toThrow();
  expect(getTodoList(TODO_LIST_SELECTOR).children.length).toBe(2);
});

test('removes todo item and updates saved list', () => {
  const deleteButton = document.querySelector('.todo__remove');

  const event = new MouseEvent('click', { bubbles: true });
  Object.defineProperty(event, 'target', {
    value: deleteButton,
    enumerable: true,
  });

  expect(getTodoList(TODO_LIST_SELECTOR).children.length).toBe(2);

  handleClickDeleteTodoTaskElement(event);

  const updatedList = getTodoList(TODO_LIST_SELECTOR);
  expect(updatedList.children.length).toBe(1);

  expect(updatedList.children[0].querySelector('.todo__text').textContent).toBe('Learn Jest');

  const updatedTodos = getTodosFromList(updatedList);
  expect(updatedTodos).toEqual(['Learn Jest']);

  const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.todo));
  expect(stored).toEqual(['Learn Jest']);
});
