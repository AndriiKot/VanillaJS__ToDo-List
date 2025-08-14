import { getTagName } from '@ui';

export const describeElement = (el) => {
  const tag = getTagName(el);
  const id = el.id ? `#${el.id}` : '';
  const classes = el.classList.length ? '.' + Array.from(el.classList).join('.') : '';
  return `<${tag}${id}${classes}>`;
};
