"use strict";

export const safeString = (value) => {
  return typeof value === "string" ? value : "";
};

export const trim = (str) => safeString(str).trim();

export const isEmpty = (str) => trim(str) === "";
