/**
 * @jest-environment jsdom
 */

import {
  getTodoInput,
  getTodoList,
  getTodoBtn,
  getTodoElements,
} from "../scripts/dom.js";

describe("DOM access helpers", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input class="todo__input" />
      <ul class="todo__list"></ul>
      <button class="todo__btn"></button>
    `;
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

  test("getTodoBtn returns button element", () => {
    const button = getTodoBtn();
    expect(button).not.toBeNull();
    expect(button.tagName).toBe("BUTTON");
  });

  test("getTodoElements returns all elements", () => {
    const { todoInput, todoList, todoButton } = getTodoElements();

    expect(todoInput).not.toBeNull();
    expect(todoList).not.toBeNull();
    expect(todoButton).not.toBeNull();
  });
});
