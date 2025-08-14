import { assertIsString } from '@asserts';

export const upper = (str) => {
  assertIsString(str);
  return str.toUpperCase();
};
