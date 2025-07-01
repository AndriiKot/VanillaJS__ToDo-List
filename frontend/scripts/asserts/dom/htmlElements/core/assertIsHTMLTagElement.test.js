import { assertIsHTMLTagElement } from "@asserts";
import { VALID_HTML_TAGS } from "@ui";

describe("assertIsHTMLTagElement", () => {
  describe("valid HTML elements (should NOT throw)", () => {
    test.each(VALID_HTML_TAGS)(
      "does not throw for a valid <%s> element",
      (tagName) => {
        const el = document.createElement(tagName);
        expect(() => assertIsHTMLTagElement(el)).not.toThrow();
      },
    );
  });

  describe("invalid values (should throw TypeError)", () => {
    const invalidValues = [
      null,
      undefined,
      "",
      "text",
      123,
      true,
      false,
      {},
      [],
      () => {},
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
    ];

    test.each(invalidValues)("throws TypeError for %p", (value) => {
      expect(() => assertIsHTMLTagElement(value)).toThrow(TypeError);
      expect(() => assertIsHTMLTagElement(value)).toThrow(
        /Expected .* to be an instance of HTMLElement, but received value .* of type .*/,
      );
    });
  });
});
