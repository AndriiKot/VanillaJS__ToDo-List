import { assertHasClassName, assertIsString } from "@asserts";
export const setListItemClassName = (li, className) => {
  assertHasClassName(li, "first argument");
  assertIsString(className, "second argument");
  li.className = className;
};
