import { toggleClassName } from "@ui";

describe("toggleClassName", () => {
  test("toggles class on a valid HTMLElement", () => {
    const div = document.createElement("div");
    div.className = "existing";
    toggleClassName(div, "new-class");
    expect(div.classList.contains("new-class")).toBe(true);

    toggleClassName(div, "new-class");
    expect(div.classList.contains("new-class")).toBe(false);
  });

  test("throws TypeError if first argument is not an HTMLElement", () => {
    expect(() => toggleClassName(null, "test")).toThrow(TypeError);
    expect(() => toggleClassName({}, "test")).toThrow(TypeError);
    expect(() => toggleClassName("string", "test")).toThrow(TypeError);
  });

  test("throws TypeError if second argument is not a string", () => {
    const div = document.createElement("div");
    expect(() => toggleClassName(div, null)).toThrow(TypeError);
    expect(() => toggleClassName(div, 123)).toThrow(TypeError);
    expect(() => toggleClassName(div, {})).toThrow(TypeError);
  });
});
