import { toggleTodoItem } from "./toggleTodoItem";

describe("toggleTodoItem", () => {
  const className = "todo__item--checked";

  test("adds class if not present", () => {
    const el = document.createElement("li");

    expect(el.classList.contains(className)).toBe(false);

    toggleTodoItem(el, className);

    expect(el.classList.contains(className)).toBe(true);
  });

  test("removes class if present", () => {
    const el = document.createElement("li");
    el.classList.add(className);

    expect(el.classList.contains(className)).toBe(true);

    toggleTodoItem(el, className);

    expect(el.classList.contains(className)).toBe(false);
  });
});
