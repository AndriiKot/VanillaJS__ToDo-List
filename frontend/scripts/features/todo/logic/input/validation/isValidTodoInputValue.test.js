import { isValidTodoInputValue } from "@features";

describe("isValidTodoInputValue", () => {
  let input;

  beforeEach(() => {
    input = document.createElement("input");
  });

  test("returns true for non-empty trimmed value", () => {
    input.value = "  Buy milk ";
    expect(isValidTodoInputValue(input)).toBe(true);
  });

  test("returns false for empty string", () => {
    input.value = "";
    expect(isValidTodoInputValue(input)).toBe(false);
  });

  test("returns false for whitespace-only string", () => {
    input.value = "     ";
    expect(isValidTodoInputValue(input)).toBe(false);
  });

  test("returns true for unicode non-empty strings", () => {
    input.value = "  Привет 🌍 ";
    expect(isValidTodoInputValue(input)).toBe(true);
  });

  test("returns false for non-string value (handled by safeString)", () => {
    // @ts-ignore - simulate wrong assignment
    input.value = null;
    expect(isValidTodoInputValue(input)).toBe(false);
  });
});
