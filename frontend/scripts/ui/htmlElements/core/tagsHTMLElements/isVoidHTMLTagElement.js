import { VOID_HTML_TAGS, getTagName } from "@ui";

export const isVoidHTMLElement = (el) => {
  return VOID_HTML_TAGS.has(getTagName(el));
};
