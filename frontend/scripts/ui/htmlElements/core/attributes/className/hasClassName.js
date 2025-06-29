import { isHTMLTagElement } from "@ui";

export const hasClassName = (el) => {
  return isHTMLTagElement(el) && "className" in el;
};
