import { clearInputValue } from '@ui';
import { addTodoTaskToList } from '@features';

export const submitTodoTaskSuccessfully = (list, input) => {
  addTodoTaskToList(list, input);
  clearInputValue(input);
};
