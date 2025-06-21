/**
 * @jest-environment jsdom
 */

import {
  getTodoInput,
  getTodoList,
  getTodoButton,
  getTodoElements,
  getTodoValidMessage,
} from "../scripts/dom.js";

describe("DOM access helpers", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input class="todo__input" />
      <ul class="todo__list"></ul>
      <button class="todo__btn"></button>
      <p class="todo__error" aria-live="polite"></p>
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
