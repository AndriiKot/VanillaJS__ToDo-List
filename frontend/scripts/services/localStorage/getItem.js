import { assertIsString } from "@asserts";
import { getRawItem } from "./getRawItem.js";
import { parseJSON } from "./parseJSON.js";

/**
 * Safely retrieves and parses a value from localStorage by key.
 * Returns parsed value or null.
 * @param {string} key
 */

export const getItem = (key) => {
  assertIsString(key, "key");

  const raw = getRawItem(key);

  return parseJSON(raw);
};
