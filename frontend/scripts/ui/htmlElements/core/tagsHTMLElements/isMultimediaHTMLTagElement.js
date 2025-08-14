import { MULTIMEDIA_HTML_TAGS, getTagName } from '@ui';

export const isMultimediaHTMLTagElement = (el) => {
  return MULTIMEDIA_HTML_TAGS.has(getTagName(el));
};
