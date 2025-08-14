import { hasHTMLElementProperty } from '@ui';

export const hasTextContent = (el) => {
  return hasHTMLElementProperty(el, 'textContent');
};
