import { setTextContent, setClassName, createSpanElement } from '@ui';

import { getTodoItemLiRemoveButtonClassName } from '@features';

export const createTodoRemoveButton = () => {
  const span = createSpanElement();
  setClassName(span, getTodoItemLiRemoveButtonClassName());
  setTextContent(span, '\u00d7');

  span.setAttribute('aria-label', 'Delete task');
  span.setAttribute('role', 'button');

  return span;
};
