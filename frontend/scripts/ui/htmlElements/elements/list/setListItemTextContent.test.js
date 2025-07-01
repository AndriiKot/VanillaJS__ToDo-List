import { setListItemTextContent } from "@ui";

describe("setListItemTextContent", () => {
  test("sets textContent of a valid <li> element", () => {
    const li = document.createElement("li");
    setListItemTextContent(li, "Hello world");
    expect(li.textContent).toBe("Hello world");
  });

  test("throws TypeError if first argument is not an <li> element", () => {
    const div = document.createElement("div");
    expect(() => setListItemTextContent(div, "Hello")).toThrow(TypeError);
  });

  test("sets empty string correctly", () => {
    const li = document.createElement("li");
    setListItemTextContent(li, "");
    expect(li.textContent).toBe("");
  });

  test("works with other string inputs", () => {
    const li = document.createElement("li");
    setListItemTextContent(li, "Test 123");
    expect(li.textContent).toBe("Test 123");
  });
});
