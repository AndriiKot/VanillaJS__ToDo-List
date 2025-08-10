import { TAG_CATEGORIES } from "./contentGroups.js";

export const TAG_TO_CATEGORIES = (() => {
  const map = {};
  for (const [category, tags] of Object.entries(TAG_CATEGORIES)) {
    for (const tag of tags) {
      const upperTag = tag.toUpperCase();
      if (!map[upperTag]) map[upperTag] = new Set();
      map[upperTag].add(category);
    }
  }
  return map;
})();
