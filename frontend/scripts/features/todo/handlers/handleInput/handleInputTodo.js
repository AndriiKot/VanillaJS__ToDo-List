import { hiddenNotValidMessage } from '@features';

export const handleInputTodo = (validationMsg) => () => {
  hiddenNotValidMessage(validationMsg);
};
