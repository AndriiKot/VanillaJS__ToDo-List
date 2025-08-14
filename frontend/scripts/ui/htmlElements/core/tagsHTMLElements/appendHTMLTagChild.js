import { assertIsAllowedHtmlChild } from '@asserts';

export const appendHTMLTagChild = (parent, child) => {
  assertIsAllowedHtmlChild(parent, child);
  return parent.appendChild(child);
};
