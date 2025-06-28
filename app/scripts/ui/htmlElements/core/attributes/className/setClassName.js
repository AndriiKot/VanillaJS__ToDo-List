import { assertHasClassName, assertIsString } from "@asserts";

export const setClassName = (li, className) => {
  assertHasClassName(li, "first argument");
  assertIsString(className, "second argument");
  li.className = className;
};
