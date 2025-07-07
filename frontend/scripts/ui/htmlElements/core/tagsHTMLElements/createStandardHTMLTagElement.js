import { assertIsValidStandardTagName } from "@asserts";
import { lower, upper } from "@utils";

export const createStandardHTMLTagElement = (tagName) => {
  assertIsValidStandardTagName(upper(tagName));
  return document.createElement(lower(tagName));
};
