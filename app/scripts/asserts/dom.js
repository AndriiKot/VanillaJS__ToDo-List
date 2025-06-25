import { isHTMLTagElement, hasTextContent, hasClassName } from "@ui";
import { isEmpty } from "@utils";
import { VALID_HTML_TAGS } from "@VALID_HTML_TAGS";

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

export const assertIsValidTagName = (tagName) => {
  if (isEmpty(tagName)) {
    throw new Error("Tag name must not be empty");
  }

  if (!VALID_HTML_TAGS.includes(tagName)) {
    throw new Error(`Invalid tag name: "${tagName}"`);
  }
};
