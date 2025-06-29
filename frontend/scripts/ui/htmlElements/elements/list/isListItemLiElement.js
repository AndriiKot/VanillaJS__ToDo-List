import { isHTMLTagElement } from "@ui";
export const isListItemLiElement = (el) => {
  return isHTMLTagElement(el) && el.tagName === "LI";
};
