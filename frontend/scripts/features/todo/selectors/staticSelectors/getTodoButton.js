import { getHTMLTagElement } from "@ui";
import { assertIsButtonElement } from "@asserts";

export const getTodoButton = (className) => {
  const el = getHTMLTagElement(className);
  assertIsButtonElement(el);
  return el;
};
