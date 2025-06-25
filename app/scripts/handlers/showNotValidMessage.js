import { setTextContent } from "../ui/";

export const showNotValidMessage = (element, message) => {
  return setTextContent(element, message);
};
