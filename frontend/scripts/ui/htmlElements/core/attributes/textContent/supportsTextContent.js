import { assertIsHTMLTagElement } from "@asserts";
import { isVoidHTMLElement, isMultimediaHTMLTagElement } from "@ui";

export const supportsTextContent = (el) => {
  assertIsHTMLTagElement(el);
  return isVoidHTMLElement(el) || isMultimediaHTMLTagElement(el) ? false : true;
};
