import { setTextContent } from "@ui";
import { assertIsSpanElement } from "@asserts";

export const setSpanTextContent = (span, text) => {
  assertIsSpanElement(span, "first argument");
  setTextContent(span, text);
};
