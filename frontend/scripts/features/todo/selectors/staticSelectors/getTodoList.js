import { assertIsListUlElement } from "@asserts";
import { getHTMLTagElement } from "@ui";

export const getTodoList = (className) => {
  const el = getHTMLTagElement(className);
  assertIsListUlElement(el);
  return el;
};
