import { createTodoItemContent } from "./createTodoItemContent";

describe("createTodoItemContent", () => {
  test("creates a span with provided text and default class", () => {
    const text = "My todo";
    const el = createTodoItemContent(text);

    expect(el).toBeInstanceOf(HTMLSpanElement);
    expect(el.className).toBe("todo__text");
    expect(el.textContent).toBe(text);
  });

  test("creates a span with provided text and custom class", () => {
    const text = "Custom todo";
    const customClass = "custom-class";
    const el = createTodoItemContent(text, customClass);

    expect(el).toBeInstanceOf(HTMLSpanElement);
    expect(el.className).toBe(customClass);
    expect(el.textContent).toBe(text);
  });

  test("creates a span with empty string text", () => {
    const el = createTodoItemContent("");
    expect(el.textContent).toBe("");
  });

  describe("throws when text is not a string", () => {
    const invalidValues = [
      123,
      -5,
      0,
      NaN,
      Infinity,
      true,
      false,
      null,
      undefined,
      {},
      [],
      Symbol("sym"),
      () => {},
    ];

    test.each(invalidValues)("throws TypeError for text: %p", (value) => {
      expect(() => createTodoItemContent(value)).toThrow();
    });
  });

  describe("throws when className is not a string", () => {
    const invalidValues = [
      123,
      -5,
      0,
      NaN,
      Infinity,
      true,
      false,
      null,
      {},
      [],
      Symbol("sym"),
      () => {},
    ];

    test.each(invalidValues)("throws TypeError for className: %p", (value) => {
      expect(() => createTodoItemContent("Valid text", value)).toThrow();
    });
  });
});
