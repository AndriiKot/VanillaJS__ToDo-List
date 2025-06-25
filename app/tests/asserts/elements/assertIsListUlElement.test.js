import { assertIsListUlElement } from "../../../scripts/asserts/";

describe("assertIsListUlElement", () => {
  describe("valid <ul> elements (should NOT throw)", () => {
    test("does not throw for a valid <ul> element", () => {
      const ul = document.createElement("ul");
      expect(() => assertIsListUlElement(ul)).not.toThrow();
    });
  });

  describe("invalid inputs (should throw TypeError)", () => {
    const invalidValues = [
      null,
      undefined,
      "",
      "ul",
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
      { tagName: "UL" },
      [],
      ["ul"],
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
      document.createElement("li"),
      document.createElement("input"),
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
      Promise.resolve("ok"),
    ];

    test.each(invalidValues)("throws TypeError for %p", (value) => {
      expect(() => assertIsListUlElement(value)).toThrow(TypeError);
      expect(() => assertIsListUlElement(value)).toThrow(
        /Expected .* to be a <ul> HTMLElement/,
      );
    });
  });
});
