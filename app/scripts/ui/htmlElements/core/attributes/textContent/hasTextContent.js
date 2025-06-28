import { isHTMLTagElement } from "@ui";

export const hasTextContent = (el) => {
  return isHTMLTagElement(el) && "textContent" in el;
};
