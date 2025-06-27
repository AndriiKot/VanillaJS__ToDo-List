import { isHTMLTagElement } from "@ui";

export const assertIsHTMLTagElement = (el) => {
  if (!isHTMLTagElement(el)) {
    throw new TypeError("Expected an instance of HTMLElement");
  }
};
