import { getTodoItemSelectorClassName, getTodoItemRemoveButtonClassName } from '@features';
import { safeClosest, getEventTarget, getEventCurrentTarget } from '@ui';

export const getRemoveTodoContext = (event) => ({
  selector: getTodoItemSelectorClassName(),
  className: getTodoItemRemoveButtonClassName(),
  target: safeClosest(getEventTarget(event), getTodoItemSelectorClassName()),
  currentTarget: getEventCurrentTarget(event),
});
