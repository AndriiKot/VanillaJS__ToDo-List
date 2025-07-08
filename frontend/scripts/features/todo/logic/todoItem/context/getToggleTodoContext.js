import {
  getTodoItemLiSelectorClassName,
  getTodoItemLiCheckedClassName,
} from "@features";
import { safeClosest, getEventTarget, getEventCurrentTarget } from "@ui";

export const getToggleTodoContext = (event) => ({
  selector: getTodoItemLiSelectorClassName(),
  className: getTodoItemLiCheckedClassName(),
  target: safeClosest(getEventTarget(event), getTodoItemLiSelectorClassName()),
  currentTarget: getEventCurrentTarget(event),
});
