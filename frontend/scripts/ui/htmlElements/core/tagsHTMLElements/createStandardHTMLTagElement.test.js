import { createStandardHTMLTagElement, VALID_STANDARD_HTML_TAGS } from "@ui";

describe("createStandardHTMLTagElement", () => {
  describe("valid standard tag names", () => {
    test.each([
      ["div", "DIV"],
      ["SPAN", "SPAN"],
      ["a", "A"],
      ["Button", "BUTTON"],
    ])('creates <%s> element (mapped to "%s")', (input, expectedTagName) => {
      const element = createStandardHTMLTagElement(input);
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element.tagName).toBe(expectedTagName);
    });
  });

  test("creates all valid standard HTML tag elements", () => {
    for (const tag of VALID_STANDARD_HTML_TAGS) {
      const el = createStandardHTMLTagElement(tag.toLowerCase());
      expect(el).toBeInstanceOf(HTMLElement);
      expect(el.tagName).toBe(tag);
    }
  });

  describe("invalid tag names", () => {
    test("throws error for empty string", () => {
      expect(() => createStandardHTMLTagElement("")).toThrow(
        "Tag name must not be empty",
      );
    });

    test.each([["notatag"], ["123"], ["💩"], ["custom-element"]])(
      'throws error for invalid tag name "%s"',
      (invalidTag) => {
        expect(() => createStandardHTMLTagElement(invalidTag)).toThrow(
          /Invalid Standard tag name/,
        );
      },
    );
  });

  describe("non-string inputs", () => {
    test.each([
      ["null", null],
      ["undefined", undefined],
      ["number", 123],
      ["boolean true", true],
      ["boolean false", false],
      ["NaN", NaN],
      ["Infinity", Infinity],
      ["array", ["div"]],
      ["object", { tag: "div" }],
      ["function", () => "div"],
      ["symbol", Symbol("div")],
      ["BigInt", BigInt(123)],
      ["RegExp", /div/],
      ["Date object", new Date()],
      ["Map", new Map()],
      ["Set", new Set()],
      ["WeakMap", new WeakMap()],
      ["WeakSet", new WeakSet()],
      ["Promise", Promise.resolve("div")],
      ["Error", new Error("fail")],
    ])("throws TypeError for %s", (_desc, input) => {
      expect(() => createStandardHTMLTagElement(input)).toThrow(TypeError);
    });

    test("Buffer (Node.js) if defined", () => {
      if (typeof Buffer !== "undefined") {
        expect(() => createStandardHTMLTagElement(Buffer.from("div"))).toThrow(
          TypeError,
        );
      }
    });
  });

  describe("String object wrapper", () => {
    test.each([
      ["new String('div')", new String("div")],
      ["new String('')", new String("")],
    ])("throws TypeError for %s", (_desc, input) => {
      expect(() => createStandardHTMLTagElement(input)).toThrow(TypeError);
    });
  });
});
