export const getTodoTextList = (listElement) =>
  Array.from(listElement.children).map((li) => {
    const textNode = li.firstChild;
    return textNode?.nodeType === Node.TEXT_NODE
      ? textNode.textContent.trim()
      : "";
  });
