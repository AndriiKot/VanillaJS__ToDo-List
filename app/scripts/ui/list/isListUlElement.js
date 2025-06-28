import { isHTMLTagElement } from "@ui";

export const isListUlElement = (el) => {
  return isHTMLTagElement(el) && el.tagName === "UL";
};
