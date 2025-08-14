import { getStaticTodoElements } from './getStaticTodoElements';

describe('getStaticTodoElements', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button class="todo__btn">Add</button>
      <input class="todo__input" />
      <ul class="todo__list"></ul>
      <div class="todo__error"></div>
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
