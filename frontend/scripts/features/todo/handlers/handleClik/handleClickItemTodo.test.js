import { handleClickItemTodo } from "@features";

describe("handleClickItemTodo", () => {
  test("toggles class on the given item", () => {
    const li = document.createElement("li");
    li.className = "todo-item";

    expect(li.classList.contains("completed")).toBe(false);

    handleClickItemTodo(li, "completed");
    expect(li.classList.contains("completed")).toBe(true);

    handleClickItemTodo(li, "completed");
    expect(li.classList.contains("completed")).toBe(false);
  });

  test("throws TypeError for invalid arguments", () => {
    expect(() => handleClickItemTodo(null, "class")).toThrow(TypeError);
    expect(() => handleClickItemTodo({}, "class")).toThrow(TypeError);
    expect(() => handleClickItemTodo("not-an-element", "class")).toThrow(
      TypeError,
    );

    const li = document.createElement("li");
    expect(() => handleClickItemTodo(li, null)).toThrow(TypeError);
    expect(() => handleClickItemTodo(li, 42)).toThrow(TypeError);
  });
});
