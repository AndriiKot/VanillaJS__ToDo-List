import { assertIsValidStandardTagName } from "@asserts";
import { VALID_STANDARD_HTML_TAGS } from "@ui";

describe("assertIsValidStandardTagName", () => {
  describe("valid HTML Standard tag names (exact casing)", () => {
    test.each(VALID_STANDARD_HTML_TAGS)(
      'accepts valid tag name "%s"',
      (tagName) => {
        expect(() => assertIsValidStandardTagName(tagName)).not.toThrow();
      },
    );
  });

  describe("empty or blank strings", () => {
    const emptyInputs = ["", " ", "\n", "\t"];

    test.each(emptyInputs)('throws for "%s"', (input) => {
      expect(() => assertIsValidStandardTagName(input)).toThrow(
        /must not be empty/i,
      );
    });
  });

  describe("invalid tag names (wrong casing or non-standard names)", () => {
    const invalidTagNames = [
      "li", // valid tag but wrong casing
      "divv",
      "header2",
      "UL!",
      "abc-123",
      "123",
      "___",
      "😀",
    ];

    test.each(invalidTagNames)("throws for invalid tag: %s", (name) => {
      expect(() => assertIsValidStandardTagName(name)).toThrow(
        `Invalid Standard tag name: "${name}"`,
      );
    });
  });

  describe("non-string values (type validation)", () => {
    const nonStringValues = [
      null,
      undefined,
      123,
      true,
      false,
      Symbol("el"),
      BigInt(10),
      {},
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
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
      Promise.resolve("ok"),
    ];

    test.each(nonStringValues)("throws for non-string value: %p", (value) => {
      expect(() => assertIsValidStandardTagName(value)).toThrow(
        /Expected .* to be a string/,
      );
    });
  });
});
