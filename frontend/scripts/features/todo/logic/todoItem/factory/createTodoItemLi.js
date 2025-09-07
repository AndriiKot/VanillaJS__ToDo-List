import { createListItem, setListItemClassName } from '@ui';

/**
 * Creates a list item (`<li>`) element for a todo item.
 *
 * Details:
 * - The `<li>` element is created using `createListItem()`.
 * - The provided `className` is applied via `setListItemClassName()` to ensure
 *   the correct styling for the todo item.
 *
 * @param {string} className - The CSS class name to assign to the `<li>` element.
 *   This determines the styling of the todo item in the list.
 * @returns {HTMLLIElement} An `<li>` element configured as a todo item container.
 */
export const createTodoItemLi = (className) => {
  const itemLi = createListItem();
  setListItemClassName(itemLi, className);

  return itemLi;
};
