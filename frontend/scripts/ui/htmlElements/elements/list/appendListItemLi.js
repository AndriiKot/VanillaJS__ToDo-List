import { assertIsListUlElement, assertIsListItemLiElement } from '@asserts';
import { appendHTMLTagChild } from '@ui';
export const appendListItemLi = (list, item) => {
  assertIsListUlElement(list, 'first argument');
  assertIsListItemLiElement(item, 'second argument');
  appendHTMLTagChild(list, item);
};
