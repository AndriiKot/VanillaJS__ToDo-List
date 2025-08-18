import { getTodoItemCheckedClassName, getTodoItemClassName } from '@features';
import { safeClosest, getEventTarget, getEventCurrentTarget, classNameToSelector } from '@ui';

export const getToggleTodoContext = (event) => ({
  className: getTodoItemCheckedClassName(),
  target: safeClosest(getEventTarget(event), classNameToSelector(getTodoItemClassName())),
  currentTarget: getEventCurrentTarget(event),
});
