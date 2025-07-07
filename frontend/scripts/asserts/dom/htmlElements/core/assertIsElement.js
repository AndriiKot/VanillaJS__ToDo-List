import { isElement } from "@ui";
import { throwTypeErrorWithTypeInfo } from "@asserts";

/**
 * Проверяет, что переданное значение является экземпляром Element.
 *
 * @param {*} value - Значение для проверки.
 * @param {string} argName - Имя аргумента для контекста ошибки (по умолчанию "value").
 * @throws {TypeError} Если значение не является Element.
 */
export const assertIsElement = (value, argName = "value") => {
  if (isElement(value)) return;

  throwTypeErrorWithTypeInfo(value, argName, "an instance of Element");
};
