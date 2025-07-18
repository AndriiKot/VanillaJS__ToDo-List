import { saveTodos } from "./saveTodos";
import { STORAGE_KEYS } from "@services";

describe("saveTodos", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("saves a list of todos to localStorage", () => {
    const todos = ["Task 1", "Task 2"];
    saveTodos(todos);

    const stored = localStorage.getItem(STORAGE_KEYS.todo);
    expect(stored).toBe(JSON.stringify(todos));
  });

  test("overwrites existing data", () => {
    localStorage.setItem(STORAGE_KEYS.todo, JSON.stringify(["Old Task"]));
    saveTodos(["New Task"]);

    const stored = localStorage.getItem(STORAGE_KEYS.todo);
    expect(stored).toBe(JSON.stringify(["New Task"]));
  });

  test("saves an empty list correctly", () => {
    saveTodos([]);

    const stored = localStorage.getItem(STORAGE_KEYS.todo);
    expect(stored).toBe("[]");
  });

  test("handles null without crashing", () => {
    expect(() => saveTodos(null)).not.toThrow();

    const stored = localStorage.getItem(STORAGE_KEYS.todo);
    expect(stored).toBe("null");
  });

  test("handles undefined without crashing", () => {
    expect(() => saveTodos(undefined)).not.toThrow();

    const stored = localStorage.getItem(STORAGE_KEYS.todo);
    expect(stored).toBe("undefined");
  });
});
