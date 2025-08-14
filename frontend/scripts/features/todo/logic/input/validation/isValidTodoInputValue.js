import { isEmpty } from '@utils';
import { getTrimmedInputValue } from '@ui';

export const isValidTodoInputValue = (input) => {
  const value = getTrimmedInputValue(input);
  return !isEmpty(value);
};
