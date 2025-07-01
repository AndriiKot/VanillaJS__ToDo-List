import { setClassName } from "@ui";

describe("setClassName", () => {
  test("sets className correctly on valid HTMLElement", () => {
    const div = document.createElement("div");
    setClassName(div, "test-class");
    expect(div.className).toBe("test-class");
  });

  test("throws TypeError if first argument is not an HTMLElement with className", () => {
    expect(() => setClassName(null, "test")).toThrow(TypeError);
    expect(() => setClassName({}, "test")).toThrow(TypeError);
    expect(() => setClassName("string", "test")).toThrow(TypeError);
  });

  test("throws TypeError if second argument is not a string", () => {
    const div = document.createElement("div");
    expect(() => setClassName(div, null)).toThrow(TypeError);
    expect(() => setClassName(div, 123)).toThrow(TypeError);
    expect(() => setClassName(div, {})).toThrow(TypeError);
  });
});
