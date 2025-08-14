export const getTodoTextList = (listElement) =>
  Array.from(listElement.children).map((li) => {
    const textSpan = li.querySelector(".todo__text");
    return textSpan.textContent;
  });
