import { setListItemClassName } from "../../../scripts/ui/";

describe("setListItemClassName", () => {
  describe("valid cases", () => {
    test("sets className on valid element with valid string", () => {
      const el = document.createElement("li");
      setListItemClassName(el, "todo__item");
      expect(el.className).toBe("todo__item");
    });

    test.each([
      ["empty string", ""],
      ["string with spaces", "   "],
      ["string with hyphen", "todo-item"],
      ["string with multiple classes", "a b c"],
      ["long string", "a".repeat(100)],
    ])("sets %s as className", (_desc, value) => {
      const el = document.createElement("li");
      setListItemClassName(el, value);
      expect(el.className).toBe(value);
    });
  });

  describe("invalid first argument (element)", () => {
    const notDomElements = [
      null,
      undefined,
      true,
      false,
      0,
      1,
      -1,
      42,
      NaN,
      Infinity,
      -Infinity,
      "",
      "string",
      Symbol("el"),
      BigInt(10),
      {},
      { className: "fake" },
      [],
      ["li"],
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
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
      Promise.resolve("ok"),
    ];

    test.each(notDomElements)(
      "throws TypeError if element is %p",
      (invalidEl) => {
        expect(() => setListItemClassName(invalidEl, "todo")).toThrow(
          TypeError,
        );
        expect(() => setListItemClassName(invalidEl, "todo")).toThrow(
          "Expected first argument to be a DOM element with className",
        );
      },
    );
  });

  describe("invalid second argument (text)", () => {
    const invalidTexts = [
      null,
      undefined,
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
      { className: "fake" },
      [],
      ["li"],
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
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
      Promise.resolve("ok"),
    ];

    test.each(invalidTexts)(
      "throws TypeError if className is %p",
      (invalidText) => {
        const el = document.createElement("li");
        expect(() => setListItemClassName(el, invalidText)).toThrow(TypeError);
        expect(() => setListItemClassName(el, invalidText)).toThrow(
          "Expected second argument to be a string",
        );
      },
    );
  });
});
