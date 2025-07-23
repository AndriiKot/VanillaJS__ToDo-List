import { handleClickDeleteTodoTaskElement } from "./handleClickDeleteTodoTaskElement";
import { getTodoList, getTodoTextList } from "@features";
import { STORAGE_KEYS } from "@services";

beforeEach(() => {
  document.body.innerHTML = `
    <ul class="todo__list">
      <li class="todo__item">
        Create Docker
        <span class="todo__item--remove">×</span>
      </li>
      <li class="todo__item">
        Learn Jest
        <span class="todo__item--remove">×</span>
      </li>
    </ul>
  `;
  localStorage.clear();
});

test("does nothing if clicked target does not have todo__item--remove class", () => {
  const event = new MouseEvent("click");
  Object.defineProperty(event, "target", {
    value: document.querySelector(".todo__list"),
    enumerable: true,
  });

  expect(() => handleClickDeleteTodoTaskElement(event)).not.toThrow();
  expect(getTodoList().children.length).toBe(2); // ничего не удалено
});

test("does nothing if closest li.todo__item is null", () => {
  // создадим span с классом, но без родителя li.todo__item
  const span = document.createElement("span");
  span.classList.add("todo__item--remove");

  const event = new MouseEvent("click");
  Object.defineProperty(event, "target", {
    value: span,
    enumerable: true,
  });

  expect(() => handleClickDeleteTodoTaskElement(event)).not.toThrow();
  expect(getTodoList().children.length).toBe(2); // ничего не удалено
});

test("removes todo item and updates saved list", () => {
  const deleteButton = document.querySelector(".todo__item--remove");

  const event = new MouseEvent("click", { bubbles: true });
  Object.defineProperty(event, "target", {
    value: deleteButton,
    enumerable: true,
  });

  expect(getTodoList().children.length).toBe(2);

  handleClickDeleteTodoTaskElement(event);

  const updatedList = getTodoList();
  expect(updatedList.children.length).toBe(1);

  const updatedTodos = getTodoTextList(updatedList);
  expect(updatedTodos).toEqual(["Learn Jest"]);

  const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.todo));
  expect(stored).toEqual(["Learn Jest"]);
});
