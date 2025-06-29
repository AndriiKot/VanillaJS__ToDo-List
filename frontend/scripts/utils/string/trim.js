"use strict";

import { safeString } from "@utils";

export const trim = (str) => {
  return safeString(str).trim();
};
