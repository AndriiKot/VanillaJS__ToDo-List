import { hasHTMLElementProperty } from "@ui";

export const hasClassName = (el) => {
  return hasHTMLElementProperty(el, "className");
};
