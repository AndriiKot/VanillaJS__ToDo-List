/**
 * @jest-environment jsdom
 */
import { initTodoApp } from './app';
import { STORAGE_KEYS } from '@services';

describe('initTodoApp full integration', () => {
  let todoInput, todoButton, todoList;

  beforeEach(() => {
    document.body.innerHTML = `
      <main class="todo">
        <div class="todo__box">
          <h2 class="todo__title">To Do List</h2>
          <div class="todo__row">
            <input
              data-js-todo-new-task-input
              type="text"
              autocomplete="off"
              placeholder="What needs to be done?"
              autofocus
            />
            <button data-js-todo-btn-add>Add</button>
          </div>
          <ul data-js-todo-list></ul>
          <div data-js-todo-error-empty-task aria-live="polite"></div>
        </div>
      </main>
    `;

    todoInput = document.querySelector('[data-js-todo-new-task-input]');
    todoList = document.querySelector('[data-js-todo-list]');
    todoButton = document.querySelector('[data-js-todo-btn-add]');

    localStorage.clear();

    global.BroadcastChannel = class {
      constructor() {
        this.name = 'todos_channel';
      }
      postMessage() {}
      close() {}
      addEventListener() {}
      removeEventListener() {}
    };
  });

  afterEach(() => {
    delete global.BroadcastChannel;
  });

  test('initializes DOM with empty list when no todos exist', () => {
    initTodoApp();

    expect(todoList.children.length).toBe(0);
  });

  test('adds and renders new todos via button click', () => {
    initTodoApp();

    todoInput.value = 'New Task';
    todoButton.click();

    const items = [...todoList.querySelectorAll('li')];
    expect(items.length).toBe(1);
    expect(items[0].textContent).toContain('New Task');
  });

  test('loads todos from localStorage when they exist', () => {
    const todos = [
      { text: 'Task 1', checked: false },
      { text: 'Task 2', checked: true },
    ];

    localStorage.setItem(STORAGE_KEYS.todo, JSON.stringify(todos));

    initTodoApp();

    const items = [...todoList.querySelectorAll('li')];
    expect(items.length).toBe(2);
    expect(items[0].textContent).toContain('Task 1');
    expect(items[1].textContent).toContain('Task 2');
  });

  test('shows validation message when typing into input', () => {
    initTodoApp();

    todoInput.value = 'test';
    todoInput.dispatchEvent(new Event('input'));

    const message = document.querySelector('[data-js-todo-error-empty-task]');
    expect(message.textContent).toBe('');
  });

  test('handles BroadcastChannel update message', () => {
    const created = [];
    global.BroadcastChannel = class {
      constructor(name) {
        this.name = name;
        this._listeners = {};
        created.push(this);
      }
      addEventListener(event, cb) {
        this._listeners[event] = this._listeners[event] || [];
        this._listeners[event].push(cb);
      }
      removeEventListener(event, cb) {
        const list = this._listeners[event] || [];
        this._listeners[event] = list.filter((fn) => fn !== cb);
      }
      postMessage(data) {
        const list = this._listeners['message'] || [];
        list.forEach((fn) => fn({ data }));
      }
      close() {}
    };

    initTodoApp();

    expect(created.length).toBeGreaterThan(0);
    created[0].postMessage({
      type: 'update',
      todos: [{ text: 'From Channel', checked: false }],
    });

    const items = [...todoList.querySelectorAll('li')];
    expect(items.length).toBe(1);
    expect(items[0].textContent).toContain('From Channel');
  });

  test('handles click on todoList', () => {
    initTodoApp();

    todoInput.value = 'Clickable Task';
    todoButton.click();

    const firstItem = todoList.querySelector('li');
    firstItem.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(todoList.querySelectorAll('li').length).toBe(1);
  });
});
