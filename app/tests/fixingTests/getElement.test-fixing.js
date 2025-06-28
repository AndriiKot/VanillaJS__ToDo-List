import { getHTMLTagElement } from "@ui";

describe("getHTMLTagElement", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test("returns element for valid selector", () => {
    document.body.innerHTML = `<div class="test"></div>`;
    const el = getHTMLTagElement(".test");
    expect(el).toBeInstanceOf(HTMLElement);
  });

  test("returns null for non-existent selector", () => {
    const el = getHTMLTagElement(".missing");
    expect(el).toBeNull();
  });

  test("throws for empty string selector", () => {
    expect(() => getHTMLTagElement("")).toThrow(/not a valid selector/i);
  });

  const invalidSelectors = [
    null,
    undefined,
    123,
    true,
    false,
    {},
    [],
    () => {},
    Symbol("s"),
    new String("test"),
  ];

  test.each(invalidSelectors)("throws TypeError for %p", (input) => {
    expect(() => getHTMLTagElement(input)).toThrow(TypeError);
    expect(() => getHTMLTagElement(input)).toThrow(/string/i);
  });
});
