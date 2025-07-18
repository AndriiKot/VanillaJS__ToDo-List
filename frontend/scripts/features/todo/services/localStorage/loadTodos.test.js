import { saveTodos } from "./saveTodos";

describe("saveTodos", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("saves an array of todos to localStorage as JSON", () => {
    const todos = ["Read book", "Write code"];
    saveTodos(todos);

    const saved = localStorage.getItem("todoList");
    expect(saved).toBe(JSON.stringify(todos));
  });

  test("saves an empty array", () => {
    saveTodos([]);
    const saved = localStorage.getItem("todoList");
    expect(saved).toBe("[]");
  });

  test("overwrites existing data in localStorage", () => {
    localStorage.setItem("todoList", JSON.stringify(["Old task"]));
    saveTodos(["New task"]);

    const saved = localStorage.getItem("todoList");
    expect(saved).toBe(JSON.stringify(["New task"]));
  });

  test("does not crash if todos is null", () => {
    expect(() => saveTodos(null)).not.toThrow();
    const saved = localStorage.getItem("todoList");
    expect(saved).toBe("null");
  });

  test("does not crash if todos is undefined", () => {
    expect(() => saveTodos(undefined)).not.toThrow();
    const saved = localStorage.getItem("todoList");
    expect(saved).toBe("undefined"); // JSON.stringify(undefined) is undefined
  });
});
