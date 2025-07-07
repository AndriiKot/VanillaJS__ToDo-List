import { assertContains } from "@asserts";

describe("assertContains", () => {
  describe("valid parent-child relationships", () => {
    test("does not throw when child is contained within parent", () => {
      const parent = document.createElement("div");
      const child = document.createElement("span");
      parent.appendChild(child);

      expect(() => assertContains(parent, child)).not.toThrow();
    });

    test("does not throw when parent is the same as child", () => {
      const el = document.createElement("div");
      expect(() => assertContains(el, el)).not.toThrow();
    });
  });

  describe("invalid containment", () => {
    test("throws when child is not contained in parent", () => {
      const parent = document.createElement("div");
      const child = document.createElement("span");

      expect(() => assertContains(parent, child)).toThrow(TypeError);
      expect(() => assertContains(parent, child)).toThrow(
        /a child element contained in/i,
      );
    });

    test("throws when child is in another branch", () => {
      const parent1 = document.createElement("div");
      const parent2 = document.createElement("div");
      const child = document.createElement("span");
      parent2.appendChild(child);

      expect(() => assertContains(parent1, child)).toThrow(TypeError);
    });
  });

  describe("invalid input types", () => {
    const invalidValues = [
      null,
      undefined,
      true,
      false,
      123,
      "node",
      {},
      [],
      () => {},
      document.createTextNode("text"),
    ];

    test.each(invalidValues)("throws if parent is %p", (invalid) => {
      const child = document.createElement("div");
      expect(() => assertContains(invalid, child)).toThrow(TypeError);
    });

    test.each(invalidValues)("throws if child is %p", (invalid) => {
      const parent = document.createElement("div");
      expect(() => assertContains(parent, invalid)).toThrow(TypeError);
    });
  });
});
