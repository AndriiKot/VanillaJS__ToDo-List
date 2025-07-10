import {
  getTodoItemLiSelectorClassName,
  getTodoItemLiRemoveClassName,
} from "@features";
import { safeClosest, getEventTarget, getEventCurrentTarget } from "@ui";

export const getRemoveTodoContext = (event) => ({
  selector: getTodoItemLiSelectorClassName(),
  className: getTodoItemLiRemoveClassName(),
  target: safeClosest(getEventTarget(event), getTodoItemLiSelectorClassName()),
  currentTarget: getEventCurrentTarget(event),
});
