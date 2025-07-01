/**
 * @jest-environment jsdom
 */

import { getObjectTypeString } from "@utils";

describe("getObjectTypeString", () => {
  const ecmaTypes = [
    ["String primitive", "hello", "[object String]"],
    ["String object", new String("hello"), "[object String]"],
    ["Number primitive", 123, "[object Number]"],
    ["Number object", new Number(123), "[object Number]"],
    ["Boolean primitive true", true, "[object Boolean]"],
    ["Boolean primitive false", false, "[object Boolean]"],
    ["Boolean object", new Boolean(true), "[object Boolean]"],
    ["Undefined", undefined, "[object Undefined]"],
    ["Null", null, "[object Null]"],
    ["Symbol", Symbol("sym"), "[object Symbol]"],
    ["BigInt", BigInt(9007199254740991), "[object BigInt]"],
    ["Array", [1, 2, 3], "[object Array]"],
    ["Object", { a: 1 }, "[object Object]"],
    ["Function", () => {}, "[object Function]"],
    ["Date", new Date(), "[object Date]"],
    ["RegExp", /abc/, "[object RegExp]"],
    ["Map", new Map(), "[object Map]"],
    ["Set", new Set(), "[object Set]"],
    ["WeakMap", new WeakMap(), "[object WeakMap]"],
    ["WeakSet", new WeakSet(), "[object WeakSet]"],
    ["Promise", Promise.resolve(), "[object Promise]"],
    ["Error", new Error("error"), "[object Error]"],
  ];

  const domTypes = [
    [
      "HTMLDivElement",
      document.createElement("div"),
      "[object HTMLDivElement]",
    ],
    [
      "HTMLInputElement",
      document.createElement("input"),
      "[object HTMLInputElement]",
    ],
    [
      "HTMLButtonElement",
      document.createElement("button"),
      "[object HTMLButtonElement]",
    ],
    [
      "HTMLUListElement",
      document.createElement("ul"),
      "[object HTMLUListElement]",
    ],
    ["HTMLLIElement", document.createElement("li"), "[object HTMLLIElement]"],
    ["Text node", document.createTextNode("text"), "[object Text]"],
    ["Comment node", document.createComment("comment"), "[object Comment]"],
    [
      "DocumentFragment",
      document.createDocumentFragment(),
      "[object DocumentFragment]",
    ],
    ["HTMLDocument", document, "[object Document]"],
    ["Window", window, "[object Window]"],
  ];

  describe("ECMAScript types", () => {
    test.each(ecmaTypes)("%s", (_, value, expected) => {
      expect(getObjectTypeString(value)).toBe(expected);
    });
  });

  describe("DOM types", () => {
    test.each(domTypes)("%s", (_, value, expected) => {
      expect(getObjectTypeString(value)).toBe(expected);
    });
  });
});
