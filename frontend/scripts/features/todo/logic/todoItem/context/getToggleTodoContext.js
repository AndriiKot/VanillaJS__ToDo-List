import { getTodoItemCheckedClassName, getTodoItemClassName } from '@features';
import { safeClosest, getEventTarget, getEventCurrentTarget, makeSelectorClassName } from '@ui';

export const getToggleTodoContext = (event) => ({
  className: getTodoItemCheckedClassName(),
  target: safeClosest(getEventTarget(event), makeSelectorClassName(getTodoItemClassName())),
  currentTarget: getEventCurrentTarget(event),
});
