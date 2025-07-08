import { getEventCurrentTarget } from "@ui";

describe("getEventCurrentTarget", () => {
  describe("valid input", () => {
    test("возвращает event.currentTarget при валидном Event", () => {
      const div = document.createElement("div");
      const event = new MouseEvent("click");
      Object.defineProperty(event, "currentTarget", { value: div });

      const result = getEventCurrentTarget(event);
      expect(result).toBe(div);
    });
  });

  describe("invalid inputs", () => {
    test.each([
      ["null", null],
      ["undefined", undefined],
      ["boolean true", true],
      ["boolean false", false],
      ["number (0)", 0],
      ["number (42)", 42],
      ["bigint", 10n],
      ["string", "event"],
      ["symbol", Symbol("e")],
      ["plain object", {}],
      ["array", []],
      ["function", () => {}],
      ["class instance (not Event)", new (class {})()],
      ["Promise", Promise.resolve()],
    ])("throws on %s", (_, input) => {
      expect(() => getEventCurrentTarget(input)).toThrow();
    });
  });
});
