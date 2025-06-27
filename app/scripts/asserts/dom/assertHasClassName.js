import { hasClassName } from "@ui";

export const assertHasClassName = (el, argName = "value") => {
  if (hasClassName(el)) return;

  let description;
  try {
    description = String(el);
  } catch {
    description = Object.prototype.toString.call(el);
  }

  throw new TypeError(
    `Expected ${argName} to be a DOM element with className, but received ${description} of type ${typeof el})`,
  );
};
