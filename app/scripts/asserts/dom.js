import { isHTMLTagElement, hasTextContent, hasClassName } from "../ui";

export const assertIsHTMLTagElement = (el) => {
  if (!isHTMLTagElement(el)) {
    throw new TypeError("Expected an instance of HTMLElement");
  }
};

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
