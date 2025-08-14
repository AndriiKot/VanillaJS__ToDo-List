import { getObjectTypeString } from '@utils';

export const getType = (value) => {
  return getObjectTypeString(value).slice(8, -1); // => "String", "Number", "Array", etc.
};
