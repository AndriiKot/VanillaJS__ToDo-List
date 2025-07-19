import { assertIsLocalStorage } from "./internal/assertIsLocalStorage.js";
import { assertCanUseLocalStorage } from "./internal/assertCanUseLocalStorage.js";

export const assertValidLocalStorage = (storage) => {
  assertIsLocalStorage(storage);
  assertCanUseLocalStorage(storage);
};
