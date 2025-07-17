import { getRawItem } from "./getRawItem.js";
import { jest } from "@jest/globals";

describe("getRawItem (integration test)", () => {
  let consoleWarnSpy;

  beforeEach(() => {
    consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  it("returns value if key exists in plain object", () => {
    const storage = { foo: "bar" };
    const result = getRawItem(storage, "foo");
    expect(result).toBe("bar");
  });

  it("returns empty string if key exists and value is empty string", () => {
    const storage = { empty: "" };
    const result = getRawItem(storage, "empty");
    expect(result).toBe("");
  });

  it("returns null and logs a warning if key is missing", () => {
    const storage = {};
    const result = getRawItem(storage, "missing");

    expect(result).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalled();
    expect(consoleWarnSpy.mock.calls[0][0]).toMatch(/missing/i);
  });

  it("works with real localStorage (if available)", () => {
    if (typeof localStorage === "undefined") return;

    localStorage.setItem("todo", "test");
    const result = getRawItem(localStorage, "todo");
    expect(result).toBe("test");
  });

  it("throws if storage is invalid", () => {
    expect(() => getRawItem(null, "key")).toThrow();
    expect(() => getRawItem(123, "key")).toThrow();
    expect(() => getRawItem(undefined, "key")).toThrow();
  });

  it("throws if key is not a string", () => {
    expect(() => getRawItem({}, 123)).toThrow();
    expect(() => getRawItem({}, null)).toThrow();
    expect(() => getRawItem({}, {})).toThrow();
  });
});
