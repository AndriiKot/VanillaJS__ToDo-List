import { hiddenNotValidMessage } from "@features";

export const handleInput = (validationMsg) => () => {
  hiddenNotValidMessage(validationMsg);
};
