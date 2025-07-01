import { hasTextContent } from "@ui";
import { getObjectTypeString, getType } from "@utils";

export const assertHasTextContent = (el, argName = "value") => {
  if (hasTextContent(el)) return;

  const objectTypeString = getObjectTypeString(el);
  const type = getType(el);

  throw new TypeError(
    `Expected ${argName} to be a DOM element with textContent, but received ${objectTypeString} of type ${type}`,
  );
};
