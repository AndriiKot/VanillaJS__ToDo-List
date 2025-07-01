import { VALID_HTML_TAGS, getTagName } from "@ui";
import { assertIsHTMLTagElement } from "@asserts";

export const isStandardHTMLTagElement = (el) => {
  assertIsHTMLTagElement(el);
  const tagName = getTagName(el);
  return VALID_HTML_TAGS.includes(tagName);
};
