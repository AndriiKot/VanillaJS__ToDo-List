import { isNode } from "@ui";

describe("isNode", () => {
  describe("valid Node instances", () => {
    test("returns true for Element nodes", () => {
      const div = document.createElement("div");
      expect(isNode(div)).toBe(true);
    });

    test("returns true for Text nodes", () => {
      const textNode = document.createTextNode("text");
      expect(isNode(textNode)).toBe(true);
    });

    test("returns true for Comment nodes", () => {
      const commentNode = document.createComment("comment");
      expect(isNode(commentNode)).toBe(true);
    });

    test("returns true for DocumentFragment nodes", () => {
      const fragment = document.createDocumentFragment();
      expect(isNode(fragment)).toBe(true);
    });

    test("returns true for Document node", () => {
      expect(isNode(document)).toBe(true);
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
    ];

    test.each(invalidValues)("returns false for %p", (value) => {
      expect(isNode(value)).toBe(false);
    });
  });
});
