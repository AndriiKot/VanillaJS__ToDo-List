import { hasTextContent } from "@ui";

export const assertHasTextContent = (el, argName = "value") => {
  if (hasTextContent(el)) return;

  let description;
  try {
    description = String(el);
  } catch {
    description = Object.prototype.toString.call(el);
  }

  throw new TypeError(
    `Expected ${argName} to be a DOM element with textContent, but received ${description} of type ${typeof el}`,
  );
};
