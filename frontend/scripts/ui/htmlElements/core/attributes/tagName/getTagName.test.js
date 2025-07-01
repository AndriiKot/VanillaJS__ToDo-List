import { getTagName } from "@ui";

describe("getTagName", () => {
  test("returns the uppercase tag name of a valid HTMLElement", () => {
    const div = document.createElement("div");
    expect(getTagName(div)).toBe("DIV");

    const ul = document.createElement("ul");
    expect(getTagName(ul)).toBe("UL");

    const input = document.createElement("input");
    expect(getTagName(input)).toBe("INPUT");
  });

  test("throws TypeError if argument is not an HTMLElement", () => {
    expect(() => getTagName(null)).toThrow(TypeError);
    expect(() => getTagName({})).toThrow(TypeError);
    expect(() => getTagName("string")).toThrow(TypeError);
    expect(() => getTagName(123)).toThrow(TypeError);
    expect(() => getTagName(document.createTextNode("text"))).toThrow(
      TypeError,
    );
  });
});
