"use strict";

export const isString = (value) => typeof value === "string";

export const safeString = (value) => {
  return typeof value === "string" ? value : "";
};

export const trim = (str) => safeString(str).trim();

export const isEmpty = (str) => trim(str) === "";
