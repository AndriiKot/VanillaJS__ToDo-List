import {
  PARENT_ALLOWED_CHILD_CATEGORIES,
  PARENT_CHILD_EXCEPTIONS,
} from "./parentAllowedCategories.js";
import { TAG_TO_CATEGORIES } from "./tagCategoriesMap.js";

const SPECIAL_ALLOWED_CHILDREN_UL_OL = ["LI", "SCRIPT", "TEMPLATE"];

export const isAllowedHtmlChild = (parentTag, childTag) => {
  const parent = parentTag.toUpperCase();
  const child = childTag.toUpperCase();

  console.log(`Check parent: ${parent}, child: ${child}`);

  // 1. Исключения
  const exceptions = PARENT_CHILD_EXCEPTIONS[parent];
  if (exceptions && exceptions.has(child)) {
    console.log("Denied by exceptions");
    return false;
  }

  // 2. Спец. правило для UL и OL
  if (
    (parent === "UL" || parent === "OL") &&
    !SPECIAL_ALLOWED_CHILDREN_UL_OL.includes(child)
  ) {
    console.log("Denied by UL/OL special rule");
    return false;
  }

  // 3. Если нет правил категорий для родителя — разрешаем всё
  if (!PARENT_ALLOWED_CHILD_CATEGORIES[parent]) {
    console.log("No allowed child categories defined, allow any child");
    return true;
  }

  // 4. Получаем разрешённые категории для родителя
  const allowedCategories = PARENT_ALLOWED_CHILD_CATEGORIES[parent];
  // 5. Получаем категории дочернего тега
  const childCategories = TAG_TO_CATEGORIES[child];

  // 6. Если у дочернего тега нет категорий — разрешаем
  if (!childCategories) {
    console.log("Child has no categories info, allow by default");
    return true;
  }

  // 7. Проверяем пересечение категорий
  for (const cat of childCategories) {
    if (allowedCategories.has(cat)) {
      console.log(`Allowed by category match: ${cat}`);
      return true;
    }
  }

  // Нет пересечения — запрещаем
  console.log("Denied: no category intersection");
  return false;
};
