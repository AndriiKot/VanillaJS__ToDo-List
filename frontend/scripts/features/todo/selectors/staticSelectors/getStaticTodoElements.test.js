import { getStaticTodoElements } from './getStaticTodoElements';

describe('getStaticTodoElements', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button data-js-todo-btn-add>Add</button>
      <input data-js-todo-new-task-input />
      <ul data-js-todo-list></ul>
      <div data-js-todo-error-empty-task></div>
    `;
  });

  it('should return all required static elements', () => {
    const elements = getStaticTodoElements();

    expect(elements.todoButton).toBeInstanceOf(HTMLElement);
    expect(elements.todoInput).toBeInstanceOf(HTMLElement);
    expect(elements.todoList).toBeInstanceOf(HTMLElement);
    expect(elements.todoValidMessage).toBeInstanceOf(HTMLElement);
  });
});
