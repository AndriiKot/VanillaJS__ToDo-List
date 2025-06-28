import { assertHasClassName, assertIsString } from "@asserts";

export const setClassName = (el, className) => {
  assertHasClassName(el, "first argument");
  assertIsString(className, "second argument");
  el.className = className;
};
