import { supportsTextContent } from "@ui";
import { throwTypeErrorWithTypeInfo } from "@asserts";

export const assertSupportsTextContent = (el, argName = "value") => {
  if (supportsTextContent(el, argName)) return;

  throwTypeErrorWithTypeInfo(
    el,
    argName,
    "an HTMLElement that supports textContent",
  );
};
