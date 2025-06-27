import { isInputElement } from "@ui";

export const assertIsInputElement = (el) => {
  if (isInputElement(el)) return;
  throw new TypeError(
    `Expected a DOM element of type <input>, but got ${typeof el}`,
  );
};
