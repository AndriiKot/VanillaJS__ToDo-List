import { getHTMLElementClassName } from "../../scripts/ui.js";

describe("getHTMLElementClassName", () => {
  describe("valid HTML elements", () => {
    test("returns className of a <div>", () => {
      const el = document.createElement("div");
      el.className = "todo__item";
      expect(getHTMLElementClassName(el)).toBe("todo__item");
    });

    test.each([
      ["empty string", ""],
      ["multiple classes", "class1 class2"],
      ["single word", "button"],
      ["hyphenated", "todo-item-active"],
      ["emoji", "🔥🚀"],
    ])("returns correct className: %s", (_desc, className) => {
      const el = document.createElement("p");
      el.className = className;
      expect(getHTMLElementClassName(el)).toBe(className);
    });
  });

  describe("invalid values (should throw)", () => {
    const invalidInputs = [
      null,
      undefined,
      42,
      NaN,
      Infinity,
      -Infinity,
      "",
      "div",
      {},
      [],
      () => {},
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
      new String("div"),
      { className: "fake" },
    ];

    test.each(invalidInputs)("throws TypeError for %p", (value) => {
      expect(() => getHTMLElementClassName(value)).toThrow(TypeError);
      expect(() => getHTMLElementClassName(value).toString()).toThrow();
    });
  });
});
