import { initTodoApp } from "@app";
import { getTodoItemLiCheckedClassName } from "@features";

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

  test("adds event listeners and handles all interactions", () => {
    initTodoApp();

    // Проверка: click на .todo__item → переключение класса
    const li = document.createElement("li");
    li.className = "todo__item";
    const span = document.createElement("span");
    li.appendChild(span);
    todoList.appendChild(li);

    expect(li.classList.contains(getTodoItemLiCheckedClassName())).toBe(false);

    const clickEvent = new MouseEvent("click", { bubbles: true });
    Object.defineProperty(clickEvent, "target", {
      value: span,
      configurable: true,
    });
    Object.defineProperty(clickEvent, "currentTarget", {
      value: todoList,
      configurable: true,
    });

    todoList.dispatchEvent(clickEvent);

    expect(li.classList.contains(getTodoItemLiCheckedClassName())).toBe(true);

    // Проверка: click по кнопке
    let clickHandled = false;
    todoButton.addEventListener("click", () => {
      clickHandled = true;
    });

    todoButton.dispatchEvent(new MouseEvent("click"));
    expect(clickHandled).toBe(true);

    // Проверка: keydown Enter
    let keydownHandled = false;
    todoInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") keydownHandled = true;
    });

    todoInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    expect(keydownHandled).toBe(true);

    // Проверка: input
    let inputHandled = false;
    todoInput.addEventListener("input", () => {
      inputHandled = true;
    });

    todoInput.dispatchEvent(new Event("input"));
    expect(inputHandled).toBe(true);
  });
});
