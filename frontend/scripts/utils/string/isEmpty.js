"use strict";

import { trim } from "@utils";

export const isEmpty = (str) => {
  return trim(str) === "";
};
