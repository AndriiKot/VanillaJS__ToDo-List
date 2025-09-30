import { BOOLEAN_ATTRIBUTES, STRING_ATTRIBUTES, NUMERIC_ATTRIBUTES } from '@ui';
import { assertIsElement } from '@asserts';

const ATTRIBUTE_TO_PROPERTY = {
  class: 'className',
  for: 'htmlFor',
  maxlength: 'maxLength',
  readonly: 'readOnly',
  tabindex: 'tabIndex',
  selected: 'selected',
};

export const setAttributeSafe = (el, key, value, options = {}) => {
  const { assertElement: checkEl = true } = options;

  if (checkEl) assertIsElement(el);
  if (!el || typeof el.setAttribute !== 'function') return el;

  const prop = ATTRIBUTE_TO_PROPERTY[key] ?? key;

  // Boolean attributes
  if (BOOLEAN_ATTRIBUTES.includes(key)) {
    const boolValue = !!value;

    // Устанавливаем стандартное свойство, если оно есть
    if (prop in el) el[prop] = boolValue;

    // Создаем свойство для прямого доступа через el[attr] (для jsdom)
    Object.defineProperty(el, key, {
      get() { return boolValue; },
      configurable: true,
      enumerable: true
    });

    // Устанавливаем или удаляем атрибут в DOM
    if (boolValue) el.setAttribute(key, key);
    else el.removeAttribute(key);

  // String attributes
  } else if (STRING_ATTRIBUTES.includes(key)) {
    const stringValue = String(value);
    el.setAttribute(key, stringValue);
    if (prop in el) el[prop] = stringValue;

    Object.defineProperty(el, key, {
      get() { return stringValue; },
      set(newValue) {
        const val = String(newValue);
        el.setAttribute(key, val);
        if (prop in el) el[prop] = val;
      },
      configurable: true,
      enumerable: true
    });

  // Numeric attributes
  } else if (NUMERIC_ATTRIBUTES.includes(key)) {
    const numValue = Number(value);
    el.setAttribute(key, String(numValue));
    if (prop in el) el[prop] = numValue;

    Object.defineProperty(el, key, {
      get() { return numValue; },
      set(newValue) {
        const val = Number(newValue);
        el.setAttribute(key, String(val));
        if (prop in el) el[prop] = val;
      },
      configurable: true,
      enumerable: true
    });

  // Unknown attributes
  } else {
    const stringValue = String(value);
    el.setAttribute(key, stringValue);

    Object.defineProperty(el, key, {
      get() { return stringValue; },
      set(newValue) {
        const val = String(newValue);
        el.setAttribute(key, val);
      },
      configurable: true,
      enumerable: true
    });
  }

  return el;
};
c