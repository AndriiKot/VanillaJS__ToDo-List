import { focusInput } from "@ui";
import { jest } from "@jest/globals";

describe("focusInput", () => {
  test("calls focus() on a valid <input> element", () => {
    const input = document.createElement("input");
    const focusSpy = jest.spyOn(input, "focus");

    focusInput(input);

    expect(focusSpy).toHaveBeenCalled();
  });

  describe("throws TypeError for invalid inputs", () => {
    const invalidInputs = [
      null,
      undefined,
      "",
      "string",
      0,
      123,
      -1,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      ["input"],
      {},
      { value: "fake" },
      () => {},
      function () {},
      Symbol("sym"),
      BigInt(10),
      /regex/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve("input"),
      new Error("fail"),
      document.createElement("div"),
      document.createElement("textarea"),
      document.createElement("select"),
      document.createTextNode("text"),
    ];

    test.each(invalidInputs)("throws TypeError for %p", (value) => {
      expect(() => focusInput(value)).toThrow(TypeError);
      expect(() => focusInput(value)).toThrow(
        /Expected a DOM element of type <input>/,
      );
    });
  });
});
