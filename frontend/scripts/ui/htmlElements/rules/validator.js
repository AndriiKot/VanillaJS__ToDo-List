import {
  PARENT_ALLOWED_CHILD_CATEGORIES,
  PARENT_CHILD_EXCEPTIONS,
} from "./parentAllowedCategories.js";
import { TAG_TO_CATEGORIES } from "./tagCategoriesMap.js";

export const isAllowedChild = (parentTag, childTag) => {
  const parent = parentTag.toUpperCase();
  const child = childTag.toUpperCase();

  // 1. Проверка на исключения (запрет вложенности определённых тегов)
  const exceptions = PARENT_CHILD_EXCEPTIONS[parent];
  if (exceptions && exceptions.has(child)) {
    return false;
  }

  // 2. Специальное правило для <ul> и <ol> — разрешены только LI, SCRIPT, TEMPLATE
  if (
    (parent === "UL" || parent === "OL") &&
    !["LI", "SCRIPT", "TEMPLATE"].includes(child)
  ) {
    return false;
  }

  // 3. Проверяем, есть ли у родителя правило для разрешённых категорий
  if (!PARENT_ALLOWED_CHILD_CATEGORIES[parent]) {
    // Если правила нет — считаем, что можно любой дочерний тег (упрощение)
    return true;
  }

  // 4. Получаем разрешённые категории для родителя
  const allowedCategories = PARENT_ALLOWED_CHILD_CATEGORIES[parent];
  // 5. Получаем категории дочернего тега
  const childCategories = TAG_TO_CATEGORIES[child];

  // Если у дочернего тега нет категорий — считаем разрешённым (на всякий случай)
  if (!childCategories) return true;

  // 6. Проверяем пересечение категорий родителя и ребёнка
  for (const cat of childCategories) {
    if (allowedCategories.has(cat)) return true;
  }

  // Если пересечения нет — запрещаем
  return false;
};
