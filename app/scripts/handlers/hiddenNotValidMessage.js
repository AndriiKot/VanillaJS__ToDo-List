import { setTextContent } from "../ui.js";

export const hiddenNotValidMessage = (element) => {
  return setTextContent(element, "");
};
