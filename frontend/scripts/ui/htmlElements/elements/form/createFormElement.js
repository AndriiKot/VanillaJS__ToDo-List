import { assertValidFormMethod } from '@asserts';

/**
 * Creates an HTML `<form>` element with the specified attributes.
 *
 * The method must be exactly `'get'` or `'post'`.
 * If no method is provided, it defaults to `'get'`.
 *
 * ⚠️ Case-sensitive: `'GET'` or `'Post'` will throw a `TypeError`.
 *
 * @param {string} [method='get'] - The form method (`'get'` or `'post'`)
 * @param {string} [action=''] - The form action URL (defaults to empty string)
 * @returns {HTMLFormElement} The created `<form>` element
 * @throws {TypeError} If the provided method is invalid
 *
 * @example
 * const form1 = createFormElement();                 // <form method="get" action="">
 * const form2 = createFormElement('post', '/save');  // <form method="post" action="/save">
 * const form3 = createFormElement('GET');            // ❌ throws TypeError
 */

export const createFormElement = (method = 'get', action = '') => {
  assertValidFormMethod(method);
  const form = document.createElement('form');
  form.method = method;
  form.action = action;
  return form;
};
