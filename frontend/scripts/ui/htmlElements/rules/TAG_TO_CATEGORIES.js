import { TAG_CATEGORIES } from "./TAG_CATEGORIES";

export const TAG_TO_CATEGORIES = (() => {
  const map = {};
  for (const [category, tags] of Object.entries(TAG_CATEGORIES)) {
    for (const tag of tags) {
      if (!map[tag]) map[tag] = new Set();
      map[tag].add(category);
    }
  }
  return map;
})();
