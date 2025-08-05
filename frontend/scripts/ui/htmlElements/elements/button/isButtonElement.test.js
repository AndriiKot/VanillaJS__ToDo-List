import { isButtonElement } from "./isButtonElement";

describe("isButtonElement", () => {
  test("returns true for a <button> element", () => {
    const button = document.createElement("button");
    expect(isButtonElement(button)).toBe(true);
  });

  test("returns false for a <div> element", () => {
    const div = document.createElement("div");
    expect(isButtonElement(div)).toBe(false);
  });

  test("returns false for null", () => {
    expect(isButtonElement(null)).toBe(false);
  });

  test("returns false for a string", () => {
    expect(isButtonElement("button")).toBe(false);
  });

  test("returns false for a plain object", () => {
    expect(isButtonElement({})).toBe(false);
  });
});
