export const getObjectTypeString = (value) => {
  // Returns a string like "[object Type]", e.g. "[object String]", "[object Array]", "[object HTMLDivElement]"
  return Object.prototype.toString.call(value);
};
