import { assertIsHTMLTagElement } from "@asserts";
import { isVoidHTMLElement, isMultimediaHTMLTagElement } from "@ui";

export const supportsTextContent = (el, argName = "value") => {
  assertIsHTMLTagElement(el, argName);
  return isVoidHTMLElement(el) || isMultimediaHTMLTagElement(el) ? false : true;
};
