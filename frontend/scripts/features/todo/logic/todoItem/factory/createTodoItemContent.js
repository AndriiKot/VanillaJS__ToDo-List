import { createSpanElement, setClassName, setTextContent } from "@ui";

export const createTodoItemContent = (text, className = "todo__text") => {
  const spanTextContent = createSpanElement();
  setClassName(spanTextContent, className);
  setTextContent(spanTextContent, text);
  return spanTextContent;
};
