import { assertIsValidClassName } from "@asserts";

describe("assertIsValidClassName", () => {
  describe("valid class names", () => {
    test.each([
      ["todo__item"],
      ["_hidden"],
      ["my-class"],
      ["btn_primary"],
      ["A1_class-name"],
    ])("does not throw for valid class name: %s", (className) => {
      expect(() => assertIsValidClassName(className)).not.toThrow();
    });
  });

  describe("empty or whitespace-only strings", () => {
    test.each([[""], [" "], ["\t"], ["\n"]])(
      "throws SyntaxError for empty/whitespace class name: %s",
      (className) => {
        expect(() => assertIsValidClassName(className)).toThrow(SyntaxError);
        expect(() => assertIsValidClassName(className)).toThrow(
          "Class name cannot be empty",
        );
      },
    );
  });

  describe("class names with spaces", () => {
    test.each([["todo item"], [" btn"], ["button "], ["first second third"]])(
      "throws SyntaxError for class name with spaces: %s",
      (className) => {
        expect(() => assertIsValidClassName(className)).toThrow(SyntaxError);
        expect(() => assertIsValidClassName(className)).toThrow(
          "must not contain spaces",
        );
      },
    );
  });

  describe("class names with invalid characters", () => {
    test.each([
      ["123abc"], // starts with digit
      ["!class"], // special character
      ["class@name"], // special character
      ["#header"], // starts with #
      ["."], // single dot
    ])("throws SyntaxError for invalid class name: %s", (className) => {
      expect(() => assertIsValidClassName(className)).toThrow(SyntaxError);
      expect(() => assertIsValidClassName(className)).toThrow(
        /Invalid class name/,
      );
    });
  });
});
