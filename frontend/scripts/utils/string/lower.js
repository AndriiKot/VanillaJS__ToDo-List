import { assertIsString } from "@asserts";

export const lower = (str) => {
  assertIsString(str);
  return str.toLowerCase();
};
