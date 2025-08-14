import { getTodoItemLiSelectorClassName, getTodoItemLiRemoveButtonClassName } from '@features';
import { safeClosest, getEventTarget, getEventCurrentTarget } from '@ui';

export const getRemoveTodoContext = (event) => ({
  selector: getTodoItemLiSelectorClassName(),
  className: getTodoItemLiRemoveButtonClassName(),
  target: safeClosest(getEventTarget(event), getTodoItemLiSelectorClassName()),
  currentTarget: getEventCurrentTarget(event),
});
