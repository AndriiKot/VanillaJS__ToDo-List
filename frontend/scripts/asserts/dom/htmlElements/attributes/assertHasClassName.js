import { hasClassName } from "@ui";
import { getObjectTypeString, getType } from "@utils";

export const assertHasClassName = (el, argName = "value") => {
  if (hasClassName(el)) return;

  const objectTypeString = getObjectTypeString(el);
  const type = getType(el);

  throw new TypeError(
    `Expected ${argName} to be a DOM element with className, but received ${objectTypeString} of type ${type})`,
  );
};
