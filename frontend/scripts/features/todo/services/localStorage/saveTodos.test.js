import { saveTodos } from "./saveTodos.js";
import { jest } from "@jest/globals";
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

  test("logs error when localStorage.setItem throws", () => {
    const mock = jest.spyOn(Storage.prototype, "setItem");
    mock.mockImplementation(() => {
      throw new Error("Test error");
    });

    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    saveTodos(["fail"]);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Failed to save todos:",
      expect.any(Error),
    );

    mock.mockRestore();
    consoleSpy.mockRestore();
  });
});
