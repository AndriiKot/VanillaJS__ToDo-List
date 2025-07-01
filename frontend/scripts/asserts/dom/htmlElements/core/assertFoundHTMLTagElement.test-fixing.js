/**
 * @jest-environment jsdom
 */

/*
import { assertFoundHTMLTagElement } from "@asserts";
import { VALID_HTML_TAGS } from "@ui";

describe("assertFoundHTMLTagElement", () => {
  const invalidValues = [
    ["null", null],
    ["undefined", undefined],
    ["empty string", ""],
    ["HTML string", "<div>"],
    ["zero", 0],
    ["positive number", 123],
    ["NaN", NaN],
    ["Infinity", Infinity],
    ["negative Infinity", -Infinity],
    ["boolean true", true],
    ["boolean false", false],
    ["empty array", []],
    ["array of string", ["div"]],
    ["plain object", {}],
    ["fake DOM-like object", { nodeType: 1, nodeName: "DIV" }],
    ["function", () => {}],
    ["symbol", Symbol("abc")],
    ["bigint", BigInt(123)],
    ["regexp", /abc/],
    ["date", new Date()],
    ["map", new Map()],
    ["set", new Set()],
    ["weakmap", new WeakMap()],
    ["weakset", new WeakSet()],
    ["promise", Promise.resolve("abc")],
    ["error", new Error("fail")],
    ["text node", document.createTextNode("text")],
    ["comment node", document.createComment("comment")],
    ["document fragment", document.createDocumentFragment()],
    ["window", window],
    ["document", document],
    ["Event prototype", Event.prototype],
    ["Event instance", new Event("click")],
    ["Node prototype", Node.prototype],
    ["faked HTMLElement", { __proto__: HTMLElement.prototype }],
    [
      "mocked DOM-like object",
      { tagName: "DIV", classList: [], appendChild: () => {} },
    ],
  ];

  describe("invalid values (non-DOM)", () => {
    test.each(invalidValues)("%s should throw TypeError", (_, value) => {
      expect(() => assertFoundHTMLTagElement(value, "testEl")).toThrow(
        TypeError,
      );
    });
  });

  // describe("HTMLElement with unsupported tag (not in VALID_HTML_TAGS)", () => {
  //   test("should throw for custom HTML element", () => {
  //     const el = document.createElement("custom-tag");
  //     const tag = el.tagName; // "CUSTOM-TAG"

  //     if (!VALID_HTML_TAGS.includes(tag)) {
  //       expect(() => assertFoundHTMLTagElement(el, "customEl")).toThrow(
  //         `Expected customEl to be a <customEl> HTMLElement`,
  //       );
  //     }
  //   });
  // });

  describe("valid HTMLElement", () => {
    test.each(VALID_HTML_TAGS)("should not throw for <%s> element", (tag) => {
      const el = document.createElement(tag.toLowerCase());
      expect(() => assertFoundHTMLTagElement(el, tag)).not.toThrow();
    });
  });
});
*/
