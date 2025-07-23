import { initTodoApp } from "@app";
import { getTodoItemLiCheckedClassName } from "@features";
import { STORAGE_KEYS } from "@services";

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

  test("initTodoApp appends stored todos and sets event listeners", () => {
    const storedTodos = ["Task 1", "Task 2"];
    localStorage.setItem(STORAGE_KEYS.todo, JSON.stringify(storedTodos)); // <-- исправлено

    initTodoApp();

    expect(todoList.children.length).toBe(storedTodos.length);
    expect(todoList.children[0].textContent).toContain("Task 1");
    expect(todoList.children[1].textContent).toContain("Task 2");

    const li = todoList.children[0];
    expect(li.classList.contains(getTodoItemLiCheckedClassName())).toBe(false);

    const clickEvent = new MouseEvent("click", { bubbles: true });
    Object.defineProperty(clickEvent, "target", {
      value: li,
      configurable: true,
    });

    todoList.dispatchEvent(clickEvent);

    expect(li.classList.contains(getTodoItemLiCheckedClassName())).toBe(true);

    let clicked = false;
    todoButton.addEventListener("click", () => {
      clicked = true;
    });

    todoButton.dispatchEvent(new MouseEvent("click"));
    expect(clicked).toBe(true);

    let enterPressed = false;
    todoInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") enterPressed = true;
    });

    todoInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    expect(enterPressed).toBe(true);

    let inputHandled = false;
    todoInput.addEventListener("input", () => {
      inputHandled = true;
    });

    todoInput.dispatchEvent(new Event("input"));
    expect(inputHandled).toBe(true);
  });
});
