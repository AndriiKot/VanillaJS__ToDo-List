import { setSpanTextContent } from "@ui";

describe("setSpanTextContent", () => {
  test("sets textContent of a valid <span> element", () => {
    const span = document.createElement("span");
    setSpanTextContent(span, "Hello world");
    expect(span.textContent).toBe("Hello world");
  });

  test("throws TypeError if first argument is not a <span> element", () => {
    const div = document.createElement("div");
    expect(() => setSpanTextContent(div, "Hello")).toThrow(TypeError);
  });

  test("sets empty string correctly", () => {
    const span = document.createElement("span");
    setSpanTextContent(span, "");
    expect(span.textContent).toBe("");
  });

  test("works with other string inputs", () => {
    const span = document.createElement("span");
    setSpanTextContent(span, "Test 123");
    expect(span.textContent).toBe("Test 123");
  });
});
