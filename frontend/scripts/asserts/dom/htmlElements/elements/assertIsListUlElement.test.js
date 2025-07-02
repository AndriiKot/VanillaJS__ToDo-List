import { assertIsListUlElement } from "@asserts";

describe("assertIsListUlElement", () => {
  describe("valid <ul> elements (should NOT throw)", () => {
    test("does not throw for a valid <ul> element", () => {
      const ul = document.createElement("ul");
      expect(() => assertIsListUlElement(ul)).not.toThrow();
    });
  });

  describe("invalid inputs (should throw TypeError)", () => {
    const invalidValues = [
      null,
      undefined,
      "",
      "text",
      123,
      true,
      false,
      {},
      [],
      () => {},
      document.createElement("div"),
      document.createElement("li"),
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
    ];

    test.each(invalidValues)("throws TypeError for %p", (value) => {
      expect(() => assertIsListUlElement(value)).toThrow(TypeError);
      expect(() => assertIsListUlElement(value)).toThrow(
        /Expected .* to be a DOM element of type <ul>/,
      );
    });
  });
});
