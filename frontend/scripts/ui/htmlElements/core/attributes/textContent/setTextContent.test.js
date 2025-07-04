import { expectTypeErrorMessage } from "@asserts";
import { assertIsHTMLTagElement, assertSupportsTextContent } from "@asserts";
import { setTextContent } from "@ui";

describe("assertIsHTMLTagElement", () => {
  test("throws TypeError if not an HTMLElement", () => {
    expectTypeErrorMessage(
      () => assertIsHTMLTagElement({}),
      "value",
      "an instance of HTMLElement",
    );
  });

  test("does not throw if HTMLElement", () => {
    expect(() =>
      assertIsHTMLTagElement(document.createElement("div")),
    ).not.toThrow();
  });
});

describe("assertSupportsTextContent", () => {
  test("throws TypeError if HTMLElement but does not support textContent (e.g. <img>)", () => {
    const img = document.createElement("img");
    expectTypeErrorMessage(
      () => assertSupportsTextContent(img, "value"),
      "value",
      "an HTMLElement that supports textContent",
    );
  });

  test("does not throw if HTMLElement supports textContent", () => {
    const div = document.createElement("div");
    expect(() => assertSupportsTextContent(div)).not.toThrow();
  });
});

describe("setTextContent", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
  });

  test("sets textContent on valid element with valid string", () => {
    setTextContent(div, "Hello world");
    expect(div.textContent).toBe("Hello world");
  });

  test("sets empty string as textContent", () => {
    setTextContent(div, "");
    expect(div.textContent).toBe("");
  });

  test("supports unicode text", () => {
    setTextContent(div, "Привет 🌍");
    expect(div.textContent).toBe("Привет 🌍");
  });

  test("throws TypeError if element is not HTMLElement", () => {
    const invalidElement = {}; // not a real HTMLElement
    expectTypeErrorMessage(
      () => setTextContent(invalidElement, "text"),
      "first argument",
      "an instance of HTMLElement",
    );
  });

  test("throws TypeError if element does not support textContent (e.g. <img>)", () => {
    const img = document.createElement("img");
    expectTypeErrorMessage(
      () => setTextContent(img, "text"),
      "first argument",
      "an HTMLElement that supports textContent",
    );
  });

  test("throws TypeError if text is not a string", () => {
    const invalidTexts = [null, undefined, 123, {}, [], true, Symbol("x")];

    for (const value of invalidTexts) {
      expectTypeErrorMessage(
        () => setTextContent(div, value),
        "second argument",
        "string",
      );
    }
  });
});
