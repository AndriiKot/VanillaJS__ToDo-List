import { assertIsListItemLiElement, assertIsHTMLClassName } from '@asserts';
import { setClassName } from '@ui';

export const setListItemClassName = (li, className) => {
  assertIsListItemLiElement(li, 'first argument');
  assertIsHTMLClassName(className, 'second argument');
  setClassName(li, className);
};
