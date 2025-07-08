import { assertIsNode, throwTypeErrorWithTypeInfo } from "@asserts";
import { describeElement } from "@ui";

export const assertContains = (parentNode, childNode) => {
  assertIsNode(parentNode, "first argument - ParentNode");
  assertIsNode(childNode, "second argument - ChildNode");

  const isValid = parentNode.contains(childNode);

  if (!isValid) {
    throwTypeErrorWithTypeInfo(
      childNode,
      `${describeElement(parentNode)}.contains(${describeElement(childNode)})`,
      `a child element contained in ${describeElement(parentNode)}`,
    );
  }

  return isValid;
};
