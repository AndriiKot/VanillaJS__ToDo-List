import { assertIsHTMLClassName } from "@asserts";

export const createTodoCheckbox = ({ type: 'text', id: '', className: ''}) => {
  const el = createInputElement(type);
  assertIsHTMLClassName(className);

  el.id = id;
  el.className = className;
  return el;
}
