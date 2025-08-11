import { assertIsAllowedHtmlChild } from "./assertIsAllowedHtmlChild.js";

describe("assertIsAllowedHtmlChild", () => {
  let parent, allowedChild, disallowedChild;

  beforeEach(() => {
    // Create real DOM elements for testing
    parent = document.createElement("ul"); // UL
    allowedChild = document.createElement("li"); // LI allowed inside UL
    disallowedChild = document.createElement("div"); // DIV disallowed inside UL
  });

  test("does NOT throw for allowed child tag", () => {
    expect(() => {
      assertIsAllowedHtmlChild(parent, allowedChild);
    }).not.toThrow();
  });

  test("throws for disallowed child tag", () => {
    expect(() => {
      assertIsAllowedHtmlChild(parent, disallowedChild);
    }).toThrow(
      /Cannot nest <DIV> inside <UL> — this is prohibited by the rules./,
    );
  });

  test("throws if first argument is not an HTMLElement", () => {
    expect(() => {
      assertIsAllowedHtmlChild("DIV", allowedChild);
    }).toThrow(TypeError);
  });

  test("throws if second argument is not an HTMLElement", () => {
    expect(() => {
      assertIsAllowedHtmlChild(parent, "SPAN");
    }).toThrow(TypeError);
  });
});
