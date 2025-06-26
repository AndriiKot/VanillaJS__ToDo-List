import * as asserts from "@asserts";

describe("asserts index exports", () => {
  // primitives.js
  test("should export assertIsString from primitives.js", () => {
    expect(typeof asserts.assertIsString).toBe("function");
  });

  // dom.js
  test("should export assertIsHTMLTagElement from dom.js", () => {
    expect(typeof asserts.assertIsHTMLTagElement).toBe("function");
  });

  test("should export assertHasTextContent from dom.js", () => {
    expect(typeof asserts.assertHasTextContent).toBe("function");
  });

  test("should export assertHasClassName from dom.js", () => {
    expect(typeof asserts.assertHasClassName).toBe("function");
  });

  test("should export assertIsValidTagName from dom.js", () => {
    expect(typeof asserts.assertIsValidTagName).toBe("function");
  });

  // elements.js
  test("should export assertIsInputElement from elements.js", () => {
    expect(typeof asserts.assertIsInputElement).toBe("function");
  });

  test("should export assertIsListUlElement from elements.js", () => {
    expect(typeof asserts.assertIsListUlElement).toBe("function");
  });

  test("should export assertIsListItemLiElement from elements.js", () => {
    expect(typeof asserts.assertIsListItemLiElement).toBe("function");
  });
});
