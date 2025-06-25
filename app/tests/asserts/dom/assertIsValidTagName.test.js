import { assertIsValidTagName } from "../../../scripts/asserts/";
import { VALID_HTML_TAGS } from "../../../scripts/validHtmlTags.js";

describe("assertIsValidTagName", () => {
  describe("valid HTML tag names (MUST be in exact casing)", () => {
    test.each(VALID_HTML_TAGS)(
      'accepts valid tag name "%s" as-is',
      (tagName) => {
        expect(() => assertIsValidTagName(tagName)).not.toThrow();
      },
    );
  });

  describe("empty or blank strings", () => {
    test.each(["", " ", "\n", "\t"])('throws for "%s"', (input) => {
      expect(() => assertIsValidTagName(input)).toThrow(/must not be empty/i);
    });
  });

  describe("invalid tag names", () => {
    const invalidTagNames = [
      "invalidtag",
      "divv",
      "123",
      "abc-123",
      "UL!", // special char
      "header2",
      "body-content",
      "___",
      "😀",
    ];

    test.each(invalidTagNames)("throws for invalid tag name: %s", (name) => {
      expect(() => assertIsValidTagName(name)).toThrow(/invalid tag name/i);
    });
  });

  describe("non-string values (should throw)", () => {
    const invalidValues = [
      null,
      undefined,
      "",
      "li",
      123,
      true,
      false,
      0,
      1,
      -1,
      42,
      NaN,
      Infinity,
      -Infinity,
      Symbol("el"),
      BigInt(10),
      {},
      { tagName: "LI" },
      [],
      ["li"],
      () => {},
      function () {},
      new String("str"),
      new Number(123),
      new Boolean(false),
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      new Error("fail"),
      document.createElement("div"),
      document.createElement("ul"),
      document.createElement("input"),
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
      Promise.resolve("ok"),
    ];

    test.each(invalidValues)(
      "throws for non-string or invalid tag: %p",
      (value) => {
        expect(() => assertIsValidTagName(value)).toThrow();
      },
    );
  });
});
