import { BOOLEAN_ATTRIBUTES, STRING_ATTRIBUTES, NUMERIC_ATTRIBUTES } from '@ui';
import { assertIsElement } from '@asserts';

const ATTRIBUTE_TO_PROPERTY = {
  class: 'className',
  for: 'htmlFor',
  maxlength: 'maxLength',
  readonly: 'readOnly',
  tabindex: 'tabIndex',
};

export const setAttributeSafe = (el, key, value, options = {}) => {
  const { assertElement: checkEl = true } = options;

  if (checkEl) {
    try {
      assertIsElement(el);
    } catch (error) {
      throw new TypeError(`Invalid element provided: ${error.message}`);
    }
  }

  if (!el || typeof el.setAttribute !== 'function') return el;

  const prop = ATTRIBUTE_TO_PROPERTY[key] ?? key;

  // Boolean attributes
  if (BOOLEAN_ATTRIBUTES.includes(key)) {
    if (value) {
      // Для boolean атрибутов устанавливаем значение как имя атрибута
      el.setAttribute(key, key);
      // Устанавливаем свойство (если оно существует)
      if (prop in el) el[prop] = true;
    } else {
      el.removeAttribute(key);
      if (prop in el) el[prop] = false;
    }

    // Для доступа через el[attr] создаем свойство
    Object.defineProperty(el, key, {
      get() {
        return value;
      },
      set(newValue) {
        value = !!newValue;
        if (value) {
          el.setAttribute(key, key);
          if (prop in el) el[prop] = true;
        } else {
          el.removeAttribute(key);
          if (prop in el) el[prop] = false;
        }
      },
      configurable: true,
      enumerable: true,
    });

    // String attributes
  } else if (STRING_ATTRIBUTES.includes(key)) {
    const stringValue = String(value);
    el.setAttribute(key, stringValue);
    if (prop in el) el[prop] = stringValue;

    // Для доступа через el[attr]
    Object.defineProperty(el, key, {
      get() {
        return stringValue;
      },
      set(newValue) {
        const newStringValue = String(newValue);
        el.setAttribute(key, newStringValue);
        if (prop in el) el[prop] = newStringValue;
      },
      configurable: true,
      enumerable: true,
    });

    // Numeric attributes
  } else if (NUMERIC_ATTRIBUTES.includes(key)) {
    const numValue = Number(value);
    el.setAttribute(key, String(numValue));
    if (prop in el) el[prop] = numValue;

    // Для доступа через el[attr]
    Object.defineProperty(el, key, {
      get() {
        return numValue;
      },
      set(newValue) {
        const newNumValue = Number(newValue);
        el.setAttribute(key, String(newNumValue));
        if (prop in el) el[prop] = newNumValue;
      },
      configurable: true,
      enumerable: true,
    });

    // Unknown attributes
  } else {
    const stringValue = String(value);
    el.setAttribute(key, stringValue);

    // Для доступа через el[attr]
    Object.defineProperty(el, key, {
      get() {
        return stringValue;
      },
      set(newValue) {
        const newStringValue = String(newValue);
        el.setAttribute(key, newStringValue);
      },
      configurable: true,
      enumerable: true,
    });
  }

  return el;
};
