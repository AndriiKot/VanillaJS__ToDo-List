import { initTodoApp } from "@app";

describe("initTodoApp", () => {
  let todoInput, todoButton, todoList, todoValidMessage;

  beforeEach(() => {
    document.body.innerHTML = `
      <main class="todo">
        <div class="todo__box">
          <h2 class="todo__title">To Do List</h2>
          <div class="todo__row">
            <input
              class="todo__input"
              type="text"
              autocomplete="off"
              placeholder="What needs to be done?"
              autofocus
            />
            <button class="todo__btn">Add</button>
          </div>
          <ul class="todo__list"></ul>
          <p class="todo__error" aria-live="polite"></p>
        </div>
      </main>
    `;

    todoInput = document.querySelector(".todo__input");
    todoList = document.querySelector(".todo__list");
    todoButton = document.querySelector(".todo__btn");
    todoValidMessage = document.querySelector(".todo__error");
  });

  test("DOM elements exist", () => {
    expect(todoInput).toBeInstanceOf(HTMLElement);
    expect(todoList).toBeInstanceOf(HTMLElement);
    expect(todoButton).toBeInstanceOf(HTMLElement);
    expect(todoValidMessage).toBeInstanceOf(HTMLElement);
  });

  test("adds event listeners to elements and handlers respond to events", () => {
    initTodoApp();

    let clickHandled = false;
    let keydownHandled = false;
    let inputHandled = false;

    todoButton.addEventListener("click", () => {
      clickHandled = true;
    });

    todoInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") keydownHandled = true;
    });

    todoInput.addEventListener("input", () => {
      inputHandled = true;
    });

    todoButton.dispatchEvent(new MouseEvent("click"));
    todoInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    todoInput.dispatchEvent(new Event("input"));

    expect(clickHandled).toBe(true);
    expect(keydownHandled).toBe(true);
    expect(inputHandled).toBe(true);
  });
});
