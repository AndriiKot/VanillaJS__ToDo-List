import { supportsTextContent } from "@ui";
import { throwTypeErrorWithTypeInfo } from "@asserts";

export const assertSupportsTextContent = (el, argName = "value") => {
  if (supportsTextContent(el)) return;

  throwTypeErrorWithTypeInfo(
    el,
    argName,
    "a DOM element without supports textContent",
  );
};
