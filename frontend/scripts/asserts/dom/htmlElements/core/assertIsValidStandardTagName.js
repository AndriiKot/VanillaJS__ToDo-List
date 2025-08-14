import { isEmpty } from '@utils';
import { VALID_STANDARD_HTML_TAGS } from '@ui';
import { assertIsString } from '@asserts';

export const assertIsValidStandardTagName = (tagName) => {
  assertIsString(tagName);
  if (isEmpty(tagName)) {
    throw new Error('Tag name must not be empty');
  }

  if (!VALID_STANDARD_HTML_TAGS.includes(tagName)) {
    throw new Error(`Invalid Standard tag name: "${tagName}"`);
  }
};
