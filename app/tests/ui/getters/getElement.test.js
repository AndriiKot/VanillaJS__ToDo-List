import { getElement } from "../../../scripts/ui/";

describe("getElement", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test("returns element for valid selector", () => {
    document.body.innerHTML = `<div class="test"></div>`;
    const el = getElement(".test");
    expect(el).toBeInstanceOf(HTMLElement);
  });

  test("returns null for non-existent selector", () => {
    const el = getElement(".missing");
    expect(el).toBeNull();
  });

  test("throws for empty string selector", () => {
    expect(() => getElement("")).toThrow(/not a valid selector/i);
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
    expect(() => getElement(input)).toThrow(TypeError);
    expect(() => getElement(input)).toThrow(/string/i);
  });
});
