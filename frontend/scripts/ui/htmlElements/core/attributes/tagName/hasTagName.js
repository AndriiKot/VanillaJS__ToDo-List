import { hasHTMLElementProperty } from '@ui';

export const hasTagName = (el) => {
  return hasHTMLElementProperty(el, 'tagName');
};
