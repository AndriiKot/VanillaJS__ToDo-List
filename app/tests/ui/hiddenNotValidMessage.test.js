import { hiddenNotValidMessage } from "../../scripts/ui.js";

describe("hiddenNotValidMessage", () => {
  describe("valid cases", () => {
    test("sets textContent to empty string on valid element", () => {
      const el = document.createElement("p");
      el.textContent = "Some error";
      hiddenNotValidMessage(el);
      expect(el.textContent).toBe("");
    });

    test.each([
      "div",
      "span",
      "p",
      "section",
      "article",
      "footer",
      "header",
      "main",
      "button",
      "label",
    ])("clears textContent for <%s> element", (tagName) => {
      const el = document.createElement(tagName);
      el.textContent = "Old message";
      hiddenNotValidMessage(el);
      expect(el.textContent).toBe("");
    });
  });

  describe("invalid argument (element)", () => {
    const invalidElements = [
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

    test.each(invalidElements)(
      "throws TypeError if element is %p",
      (invalidEl) => {
        expect(() => hiddenNotValidMessage(invalidEl)).toThrow(TypeError);
        expect(() => hiddenNotValidMessage(invalidEl)).toThrow(
          /Expected first argument to be a DOM element/,
        );
      },
    );
  });
});
