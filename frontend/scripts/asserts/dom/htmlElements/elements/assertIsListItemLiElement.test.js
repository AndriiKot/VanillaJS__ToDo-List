import { assertIsListItemLiElement } from "@asserts";

describe("assertIsListItemLiElement", () => {
  describe("valid <li> elements (should NOT throw)", () => {
    test("does not throw for a valid <li> element", () => {
      const li = document.createElement("li");
      expect(() => assertIsListItemLiElement(li)).not.toThrow();
    });
  });

  describe("invalid inputs (should throw TypeError)", () => {
    const invalidValues = [
      null,
      undefined,
      "",
      "text",
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
      { textContent: "fake" },
      [],
      ["div"],
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
      document.createElement("textarea"),
      document.createElement("select"),
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
      Promise.resolve("ok"),
    ];

    test.each(invalidValues)("throws TypeError for %p", (value) => {
      expect(() => assertIsListItemLiElement(value)).toThrow(TypeError);
      expect(() => assertIsListItemLiElement(value)).toThrow(
        /Expected .* to be a DOM element of type <li>, but received \[object .*\] of type .*/,
      );
    });
  });
});
