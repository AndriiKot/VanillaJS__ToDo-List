import { getTodoItemCheckedClassName, getTodoItemClassName } from '@features';
import {
  findClosestBySelector,
  getEventTarget,
  getEventCurrentTarget,
  classNameToSelector,
} from '@ui';

export const getToggleTodoContext = (event) => ({
  className: getTodoItemCheckedClassName(),
  target: findClosestBySelector(getEventTarget(event), classNameToSelector(getTodoItemClassName())),
  currentTarget: getEventCurrentTarget(event),
});
