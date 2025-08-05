import { assertIsDivElement } from "@asserts";

describe("assertIsDivElement", () => {
  describe("valid <div> element (should NOT throw)", () => {
    test("does not throw for a valid <div> element", () => {
      const div = document.createElement("div");
      expect(() => assertIsDivElement(div)).not.toThrow();
    });
  });

  describe("invalid inputs (should throw TypeError)", () => {
    const invalidValues = [
      null,
      undefined,
      "",
      "div",
      123,
      true,
      false,
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
      document.createElement("span"),
      document.createElement("input"),
      document.createElement("ul"),
      document.createElement("section"),
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
      Promise.resolve("ok"),
    ];

    test.each(invalidValues)("throws TypeError for %p", (value) => {
      expect(() => assertIsDivElement(value)).toThrow(TypeError);
      expect(() => assertIsDivElement(value)).toThrow(
        /Expected value to be a DOM element of type <div>, but received \[object .*] of type .*/,
      );
    });
  });
});
