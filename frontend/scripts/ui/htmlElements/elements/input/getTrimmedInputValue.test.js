import { getTrimmedInputValue } from "@ui";

describe("getTrimmedInputValue", () => {
  test("returns trimmed string value from a real input element", () => {
    const input = document.createElement("input");
    input.value = "   some text with spaces   ";
    const result = getTrimmedInputValue(input);

    expect(result).toBe("some text with spaces");
  });

  test("returns an empty string if input value is empty or whitespace only", () => {
    const input = document.createElement("input");
    input.value = "    "; // only spaces

    const result = getTrimmedInputValue(input);

    expect(result).toBe(""); // trimmed empty string
  });

  test("handles input with no spaces correctly", () => {
    const input = document.createElement("input");
    input.value = "textWithoutSpaces";

    const result = getTrimmedInputValue(input);

    expect(result).toBe("textWithoutSpaces");
  });

  test("returns empty string for input with empty value", () => {
    const input = document.createElement("input");
    input.value = "";

    const result = getTrimmedInputValue(input);

    expect(result).toBe("");
  });
});
