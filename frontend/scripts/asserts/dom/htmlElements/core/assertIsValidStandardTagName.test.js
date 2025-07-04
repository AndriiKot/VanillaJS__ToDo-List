import { assertIsValidStandardTagName, expectTypeErrorMessage } from "@asserts";
import { VALID_STANDARD_HTML_TAGS } from "@ui";

describe("assertIsValidStandardTagName", () => {
  test("does not throw for valid tag names", () => {
    const validTags = ["DIV", "SPAN", "A", "BUTTON"];
    validTags.forEach((tag) => {
      if (VALID_STANDARD_HTML_TAGS.includes(tag)) {
        expect(() => assertIsValidStandardTagName(tag)).not.toThrow();
      }
    });
  });

  test("throws TypeError if tagName is not a string", () => {
    const invalidValues = [null, undefined, 123, {}, [], true, Symbol("x")];
    invalidValues.forEach((value) => {
      expect(() => {
        expectTypeErrorMessage(
          () => assertIsValidStandardTagName(value),
          "value",
          "string",
        );
      }).not.toThrow();
    });
  });

  test("throws Error if tagName is an empty string", () => {
    expect(() => assertIsValidStandardTagName("")).toThrow(
      "Tag name must not be empty",
    );
  });

  test("throws Error if tagName is not in VALID_STANDARD_HTML_TAGS", () => {
    expect(() => assertIsValidStandardTagName("NOT_A_TAG")).toThrow(
      'Invalid Standard tag name: "NOT_A_TAG"',
    );
  });

  test("is case-sensitive if tag list is case-sensitive", () => {
    const upper = "DIV";
    const lower = "div";

    if (VALID_STANDARD_HTML_TAGS.includes(upper)) {
      expect(() => assertIsValidStandardTagName(upper)).not.toThrow();
    }

    if (!VALID_STANDARD_HTML_TAGS.includes(lower)) {
      expect(() => assertIsValidStandardTagName(lower)).toThrow(
        `Invalid Standard tag name: "${lower}"`,
      );
    }
  });
});
