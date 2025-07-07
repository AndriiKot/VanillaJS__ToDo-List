import { assertContains } from "@asserts";

export const safeContains = (parent, child) => {
  assertContains(parent, child);
  return true;
};
