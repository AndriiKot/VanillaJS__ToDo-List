import { assertIsNode } from "@asserts";

describe("assertIsNode", () => {
  describe("valid Node instances", () => {
    test("does not throw for various DOM Node types", () => {
      const validNodes = [
        document.createElement("div"), // Element
        document.createTextNode("text"), // Text
        document.createComment("comment"), // Comment
        document.createDocumentFragment(), // DocumentFragment
        document, // Document itself (Node subclass)
        window.document.documentElement, // <html> Element
      ];

      validNodes.forEach((node) => {
        expect(() => assertIsNode(node)).not.toThrow();
      });
    });
  });

  describe("invalid non-Node values", () => {
    const invalidValues = [
      null,
      undefined,
      "",
      "node",
      0,
      1,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      Symbol("node"),
      BigInt(123),
      {},
      [],
      ["node"],
      () => {},
      function () {},
      new String("node"),
      new Number(123),
      new Boolean(false),
      new Date(),
      new Error("fail"),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve("ok"),
      document.createElement("div").classList, // DOMTokenList, not a Node
    ];

    test.each(invalidValues)("throws TypeError for %p", (value) => {
      expect(() => assertIsNode(value, "arg")).toThrow(TypeError);
      expect(() => assertIsNode(value, "arg")).toThrow(
        /arg.*instance of Node/i,
      );
    });
  });
});
