import { isHTMLTagElement } from "@ui";

export const isInputElement = (el) => {
  return isHTMLTagElement(el) && el.tagName === "INPUT";
};
