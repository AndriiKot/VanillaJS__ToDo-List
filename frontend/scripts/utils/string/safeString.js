import { isString } from '@utils';

export const safeString = (value) => {
  return isString(value) ? value : '';
};
