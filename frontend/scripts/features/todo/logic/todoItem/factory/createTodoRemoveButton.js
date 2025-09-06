import { setTextContent, setClassName, createSpanElement, setRole } from '@ui';

import { getTodoItemRemoveButtonClassName } from '@features';

export const createTodoRemoveButton = () => {
  const span = createSpanElement();
  setClassName(span, getTodoItemRemoveButtonClassName());
  setTextContent(span, '\u00d7');

  span.setAttribute('aria-label', 'Delete task');
  setRole(span, 'button');

  return span;
};
