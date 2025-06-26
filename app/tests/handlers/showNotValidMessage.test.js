import { showNotValidMessage } from "@handlers";

describe("showNotValidMessage", () => {
  describe("valid cases", () => {
    test("sets textContent on valid element with valid string", () => {
      const el = document.createElement("p");
      showNotValidMessage(el, "Hello");
      expect(el.textContent).toBe("Hello");
    });

    test.each([
      ["empty string", ""],
      ["string with spaces", "   "],
      ["string with newlines", "\n\n"],
      ["string with emojis", "🚀🔥"],
      ["long string", "a".repeat(1000)],
    ])("sets %s as textContent", (_desc, value) => {
      const el = document.createElement("div");
      showNotValidMessage(el, value);
      expect(el.textContent).toBe(value);
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
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
      Promise.resolve("ok"),
    ];

    test.each(notDomElements)(
      "throws TypeError if element is %p",
      (invalidEl) => {
        expect(() => showNotValidMessage(invalidEl, "text")).toThrow(TypeError);
        expect(() => showNotValidMessage(invalidEl, "text")).toThrow(
          "Expected first argument to be a DOM element",
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
      123,
      -10,
      NaN,
      Infinity,
      -Infinity,
      {},
      [],
      [1, 2],
      () => "text",
      function () {},
      Symbol("text"),
      BigInt(100),
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      new Error("fail"),
      new String("wrapped"), // object, not primitive
      new Number(5),
      new Boolean(true),
      Promise.resolve("ok"),
    ];

    test.each(invalidTexts)("throws TypeError if text is %p", (invalidText) => {
      const el = document.createElement("div");
      expect(() => showNotValidMessage(el, invalidText)).toThrow(TypeError);
      expect(() => showNotValidMessage(el, invalidText)).toThrow(
        "Expected second argument to be a string",
      );
    });
  });
});
