import { assertContains } from "@asserts";

export const safeContains = (parent, child) => {
  return assertContains(parent, child);
};
