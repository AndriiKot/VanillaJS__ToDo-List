/**
 * @jest-environment jsdom
 */

import { getType } from "@utils";

describe("getType", () => {
  const ecmaTypes = [
    ["String primitive", "hello", "String"],
    ["String object", new String("hello"), "String"],
    ["Number primitive", 123, "Number"],
    ["Number object", new Number(123), "Number"],
    ["Boolean primitive true", true, "Boolean"],
    ["Boolean primitive false", false, "Boolean"],
    ["Boolean object", new Boolean(true), "Boolean"],
    ["Undefined", undefined, "Undefined"],
    ["Null", null, "Null"],
    ["Symbol", Symbol("sym"), "Symbol"],
    ["BigInt", BigInt(9007199254740991), "BigInt"],
    ["Array", [1, 2, 3], "Array"],
    ["Object", { a: 1 }, "Object"],
    ["Function", () => {}, "Function"],
    ["Date", new Date(), "Date"],
    ["RegExp", /abc/, "RegExp"],
    ["Map", new Map(), "Map"],
    ["Set", new Set(), "Set"],
    ["WeakMap", new WeakMap(), "WeakMap"],
    ["WeakSet", new WeakSet(), "WeakSet"],
    ["Promise", Promise.resolve(), "Promise"],
    ["Error", new Error("error"), "Error"],
  ];

  const domTypes = [
    ["HTMLDivElement", document.createElement("div"), "HTMLDivElement"],
    ["HTMLInputElement", document.createElement("input"), "HTMLInputElement"],
    [
      "HTMLButtonElement",
      document.createElement("button"),
      "HTMLButtonElement",
    ],
    ["HTMLUListElement", document.createElement("ul"), "HTMLUListElement"],
    ["HTMLLIElement", document.createElement("li"), "HTMLLIElement"],
    ["Text node", document.createTextNode("text"), "Text"],
    ["Comment node", document.createComment("comment"), "Comment"],
    ["DocumentFragment", document.createDocumentFragment(), "DocumentFragment"],
    ["HTMLDocument", document, "Document"],
    ["Window", window, "Window"],
  ];

  describe("ECMAScript types", () => {
    test.each(ecmaTypes)("%s", (_, value, expected) => {
      expect(getType(value)).toBe(expected);
    });
  });

  describe("DOM types", () => {
    test.each(domTypes)("%s", (_, value, expected) => {
      expect(getType(value)).toBe(expected);
    });
  });
});
