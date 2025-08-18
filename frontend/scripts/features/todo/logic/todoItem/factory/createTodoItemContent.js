import { createSpanElement, setTextContent } from '@ui';
import { getTodoItemTextClassName } from '@features';

/**
 * Creates a new span element with the provided text and the
 * className returned by getTodoItemTextClassName.
 *
 * @param {string} text - The text content for the span element.
 * @return {HTMLSpanElement} A new span element with the provided text
 * and the correct class name.
 */

export const createTodoItemContent = (text) => {
  const className = getTodoItemTextClassName();
  const spanTextContent = createSpanElement();
  spanTextContent.className = className;
  setTextContent(spanTextContent, text);
  return spanTextContent;
};
