import { PARENT_ALLOWED_CHILD_CATEGORIES } from "./PARENT_ALLOWED_CHILD_CATEGORIES";
import { PARENT_CHILD_EXCEPTIONS } from "./PARENT_CHILD_EXCEPTIONS";
import { TAG_TO_CATEGORIES } from "./TAG_TO_CATEGORIES.js";

const SPECIAL_ALLOWED_CHILDREN_UL_OL = ["LI", "SCRIPT", "TEMPLATE"];

export const isAllowedHtmlChild = (parentTag, childTag) => {
  const parent = parentTag.toUpperCase();
  const child = childTag.toUpperCase();

  const exceptions = PARENT_CHILD_EXCEPTIONS[parent];
  if (exceptions && exceptions.has(child)) {
    return false;
  }

  if (
    (parent === "UL" || parent === "OL") &&
    !SPECIAL_ALLOWED_CHILDREN_UL_OL.includes(child)
  ) {
    return false;
  }

  if (!PARENT_ALLOWED_CHILD_CATEGORIES[parent]) {
    return true;
  }

  const allowedCategories = PARENT_ALLOWED_CHILD_CATEGORIES[parent];

  const childCategories = TAG_TO_CATEGORIES[child];

  if (!childCategories) {
    return true;
  }

  for (const cat of childCategories) {
    if (allowedCategories.has(cat)) {
      return true;
    }
  }

  return false;
};
