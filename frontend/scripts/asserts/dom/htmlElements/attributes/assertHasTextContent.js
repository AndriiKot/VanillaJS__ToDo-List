import { hasTextContent } from "@ui";
import { throwTypeErrorWithTypeInfo } from "@asserts";

export const assertHasTextContent = (el, argName = "value") => {
  if (hasTextContent(el)) return;

  throwTypeErrorWithTypeInfo(el, argName, "a DOM element with textContent");
};
