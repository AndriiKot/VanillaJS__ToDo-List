import { setTextContent } from "../ui.js";

export const showNotValidMessage = (element, message) => {
  return setTextContent(element, message);
};
