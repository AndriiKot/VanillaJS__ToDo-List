import { isHTMLTagElement } from "@ui";

export const isListUlElement = (el) =>
  isHTMLTagElement(el) && el.tagName === "UL";

export const isListItemLiElement = (el) =>
  isHTMLTagElement(el) && el.tagName === "LI";
