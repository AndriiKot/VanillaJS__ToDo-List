import { getTodoItemCheckedClassName, getTodoItemClassName } from '@features';
import { validatedClosest, getEventTarget, getEventCurrentTarget, classNameToSelector } from '@ui';

export const getToggleTodoContext = (event) => ({
  className: getTodoItemCheckedClassName(),
  target: validatedClosest(getEventTarget(event), classNameToSelector(getTodoItemClassName())),
  currentTarget: getEventCurrentTarget(event),
});
