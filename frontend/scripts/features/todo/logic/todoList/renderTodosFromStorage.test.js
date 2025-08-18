import { renderTodosFromStorage } from './renderTodosFromStorage';

describe('renderTodosFromStorage', () => {
  let todoList;

  beforeEach(() => {
    // Create a fresh <ul> element before each test
    todoList = document.createElement('ul');
  });

  test('renders multiple todos into the list', () => {
    const todos = [
      { text: 'Task 1', checked: true },
      { text: 'Task 2', checked: false },
      { text: 'Task 3', checked: true },
    ];

    // Render the array of todos into the <ul>
    renderTodosFromStorage(todoList, todos);

    // Verify that all todo items are appended
    expect(todoList.children.length).toBe(todos.length);

    todos.forEach((todo, index) => {
      const li = todoList.children[index];
      expect(li).toBeInstanceOf(HTMLElement);

      // Check the text inside <span class="todo__text">
      const textSpan = li.querySelector('.todo__text');
      expect(textSpan).not.toBeNull();
      expect(textSpan.textContent).toBe(todo.text);

      // Check if the "checked" class is applied correctly
      const isChecked = li.classList.contains('todo__item--checked');
      expect(isChecked).toBe(todo.checked);
    });
  });

  test('renders an empty array without errors', () => {
    const todos = [];

    // Render an empty array
    renderTodosFromStorage(todoList, todos);

    // The list should remain empty
    expect(todoList.children.length).toBe(0);
  });
});
