import { hasClassName } from "@ui";
import { throwTypeErrorWithTypeInfo } from "@asserts";

export const assertHasClassName = (el, argName = "value") => {
  if (hasClassName(el)) return;

  throwTypeErrorWithTypeInfo(el, argName, "a DOM element with className");
};
