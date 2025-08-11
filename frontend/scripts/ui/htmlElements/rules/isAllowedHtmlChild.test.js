import { isAllowedHtmlChild } from "@ui";

describe("isAllowedHtmlChild", () => {
  test("returns false if child is explicitly forbidden by exceptions", () => {
    // e.g. <A> cannot have <A> inside; <BUTTON> cannot have <BUTTON> inside
    expect(isAllowedHtmlChild("A", "A")).toBe(false);
    expect(isAllowedHtmlChild("BUTTON", "BUTTON")).toBe(false);
  });

  test("returns true for UL or OL if child tag is LI, SCRIPT or TEMPLATE", () => {
    expect(isAllowedHtmlChild("UL", "LI")).toBe(true);
    expect(isAllowedHtmlChild("UL", "SCRIPT")).toBe(true);
    expect(isAllowedHtmlChild("UL", "TEMPLATE")).toBe(true);
    expect(isAllowedHtmlChild("OL", "LI")).toBe(true);
    expect(isAllowedHtmlChild("OL", "SCRIPT")).toBe(true);
    expect(isAllowedHtmlChild("OL", "TEMPLATE")).toBe(true);
  });

  test("returns false for UL or OL if child tag is NOT LI, SCRIPT or TEMPLATE", () => {
    expect(isAllowedHtmlChild("UL", "DIV")).toBe(false);
    expect(isAllowedHtmlChild("OL", "SPAN")).toBe(false);
    expect(isAllowedHtmlChild("UL", "P")).toBe(false);
  });

  test("returns true if parent tag is not listed in allowed child categories (no rules defined)", () => {
    // "XYZ" is not in PARENT_ALLOWED_CHILD_CATEGORIES, so any child allowed
    expect(isAllowedHtmlChild("XYZ", "DIV")).toBe(true);
    expect(isAllowedHtmlChild("XYZ", "SPAN")).toBe(true);
  });

  test("returns true if child tag is not listed in TAG_TO_CATEGORIES (no categories info)", () => {
    // "XYZ" not in TAG_TO_CATEGORIES, so allowed by default
    expect(isAllowedHtmlChild("DIV", "XYZ")).toBe(true);
  });

  test("returns true if child's categories intersect with parent's allowed categories", () => {
    // UL allows "Flow content"; LI belongs to "Flow content"
    expect(isAllowedHtmlChild("UL", "LI")).toBe(true);

    // P allows "Phrasing content"; SPAN belongs to "Phrasing content"
    expect(isAllowedHtmlChild("P", "SPAN")).toBe(true);
  });

  test("returns false if no intersection between parent's allowed categories and child's categories", () => {
    // P allows "Phrasing content"; SCRIPT belongs to "Metadata content" and "Phrasing content"
    // According to your data, SCRIPT is in "Phrasing content" => allowed by categories, so test with another tag
    // Let's choose SCRIPT removed from "Phrasing content" or test another tag with no intersection

    // For demonstration, assuming SCRIPT is not in parent's allowed categories, so:
    // Actually, SCRIPT is in Phrasing content => should return true, so let's use another test case:

    // Let's pick "IMG" (Embedded content & Phrasing content) inside "DIV" (Flow content only) => no intersection
    expect(isAllowedHtmlChild("DIV", "IMG")).toBe(false);

    // And also "SCRIPT" inside "P" should be allowed, so test it returns true
    expect(isAllowedHtmlChild("P", "SCRIPT")).toBe(true);
  });
});
