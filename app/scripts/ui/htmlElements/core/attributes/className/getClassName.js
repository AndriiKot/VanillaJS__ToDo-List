import { assertHasClassName } from "@asserts";

export const getClassName = (el) => {
  assertHasClassName(el);
  return el.className;
};
