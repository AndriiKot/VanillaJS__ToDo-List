/**
 * @jest-environment jsdom
 */

let getTodoInput;
let getTodoList;
let getTodoButton;
let getTodoElements;
let getTodoValidMessage;

describe("DOM access helpers", () => {
  beforeEach(async () => {
    document.body.innerHTML = `
      <input class="todo__input" />
      <ul class="todo__list"></ul>
      <button class="todo__btn"></button>
      <p class="todo__error" aria-live="polite"></p>
    `;

    const selectors = await import("@selectors");

    getTodoInput = selectors.getTodoInput;
    getTodoList = selectors.getTodoList;
    getTodoButton = selectors.getTodoButton;
    getTodoElements = selectors.getTodoElements;
    getTodoValidMessage = selectors.getTodoValidMessage;
  });

  test("getTodoInput returns input element", () => {
    const input = getTodoInput();
    expect(input).not.toBeNull();
    expect(input.tagName).toBe("INPUT");
  });

  test("getTodoList returns list element", () => {
    const list = getTodoList();
    expect(list).not.toBeNull();
    expect(list.tagName).toBe("UL");
  });

  test("getTodoButton returns button element", () => {
    const button = getTodoButton();
    expect(button).not.toBeNull();
    expect(button.tagName).toBe("BUTTON");
  });

  test("getTodoElements returns all elements", () => {
    const { todoInput, todoList, todoButton } = getTodoElements();

    expect(todoInput).not.toBeNull();
    expect(todoList).not.toBeNull();
    expect(todoButton).not.toBeNull();
  });

  test("getTodoValidMessage returns error message element", () => {
    const error = getTodoValidMessage();
    expect(error).not.toBeNull();
    expect(error.tagName).toBe("P");
    expect(error.className).toBe("todo__error");
    expect(error.getAttribute("aria-live")).toBe("polite");
  });
});
