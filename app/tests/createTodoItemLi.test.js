import { createTodoItemLi } from "../scripts/task.js";

describe("createTodoItemLi", () => {
  test("returns <li> element with correct class and text content", () => {
    const text = "Buy milk";
    const li = createTodoItemLi(text);

    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.className).toBe("todo__item"); // предполагается, что это значение todoLiElementClassName
    expect(li.textContent).toBe(text);
  });

  test.each([
    "Task 1",
    "Do homework",
    "🧼 Clean room",
    "🚀 Launch project",
    "a".repeat(100),
  ])("creates <li> with text: %s", (text) => {
    const li = createTodoItemLi(text);
    expect(li.tagName).toBe("LI");
    expect(li.className).toBe("todo__item");
    expect(li.textContent).toBe(text);
  });
});
