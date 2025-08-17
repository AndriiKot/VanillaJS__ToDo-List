export const getTodoTextList = (listElement) => {
  return Array.from(listElement.children).map((li) => {
    const textSpan = li.querySelector('.todo__text');
    return { text: textSpan.textContent, checked: li.matches('.todo__item--checked') };
  });
};
