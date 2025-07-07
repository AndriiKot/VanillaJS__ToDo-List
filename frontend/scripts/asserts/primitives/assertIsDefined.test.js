import { assertIsDefined } from "@asserts";

describe("assertIsDefined", () => {
  describe("valid (non-null and non-undefined) values", () => {
    const validValues = [
      "",
      "string",
      0,
      1,
      -1,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      Symbol("sym"),
      BigInt(123),
      {},
      { key: "value" },
      [],
      [1, 2, 3],
      () => {},
      function () {},
      new String("str"),
      new Number(123),
      new Boolean(false),
      new Date(),
      new Error("error"),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      document.createElement("div"),
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
      Promise.resolve("ok"),
    ];

    test.each(validValues)("does not throw for %p", (value) => {
      expect(() => assertIsDefined(value, "arg")).not.toThrow();
    });
  });

  describe("invalid (null and undefined) values", () => {
    const invalidValues = [null, undefined];

    test.each(invalidValues)("throws TypeError for %p", (value) => {
      expect(() => assertIsDefined(value, "arg")).toThrow(TypeError);
      expect(() => assertIsDefined(value, "arg")).toThrow(
        /arg.*non-null and non-undefined/i,
      );
    });
  });
});
