export const assertIsStorageLike = (storage, messagePrefix = "") => {
  const type = typeof storage;

  if ((type !== "object" && type !== "function") || storage === null) {
    throw new TypeError(
      `${messagePrefix}Expected a storage-like object, got ${type}`,
    );
  }

  const hasGetItem = typeof storage.getItem === "function";
  const isPlainObject =
    Object.prototype.toString.call(storage) === "[object Object]";

  if (!hasGetItem && !isPlainObject) {
    throw new TypeError(
      `${messagePrefix}Expected storage-like object (Storage or plain Object), but got unsupported type.`,
    );
  }
};
