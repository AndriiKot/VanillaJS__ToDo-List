import { getTodoItemSelectorClassName, getTodoItemCheckedClassName } from '@features';
import { safeClosest, getEventTarget, getEventCurrentTarget } from '@ui';

export const getToggleTodoContext = (event) => ({
  selector: getTodoItemSelectorClassName(),
  className: getTodoItemCheckedClassName(),
  target: safeClosest(getEventTarget(event), getTodoItemSelectorClassName()),
  currentTarget: getEventCurrentTarget(event),
});
