export const createExpectedTypeMessage = (argName, expectedDescription) => {
  const escapedDescription = expectedDescription.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );

  const pattern = `Expected\\s+${argName}\\s+to be\\s+${escapedDescription}`;

  return new RegExp(pattern, "i");
};
