import { isEmpty } from "@utils";
import { VALID_HTML_TAGS } from "@ui";

export const assertIsValidTagName = (tagName) => {
  if (isEmpty(tagName)) {
    throw new Error("Tag name must not be empty");
  }

  if (!VALID_HTML_TAGS.includes(tagName)) {
    throw new Error(`Invalid tag name: "${tagName}"`);
  }
};
