export const isHTMLTagElement = (el) => el instanceof HTMLElement;

export const isInputElement = (el) =>
  isHTMLTagElement(el) && el.tagName === "INPUT";

export const isListUlElement = (el) =>
  isHTMLTagElement(el) && el.tagName === "UL";

export const isListItemLiElement = (el) =>
  isHTMLTagElement(el) && el.tagName === "LI";

export const hasTextContent = (el) =>
  isHTMLTagElement(el) && "textContent" in el;

export const hasClassName = (el) => isHTMLTagElement(el) && "className" in el;
