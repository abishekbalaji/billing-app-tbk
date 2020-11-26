import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;

export const selectCategoriesList = createSelector(
  [selectCategories],
  (categories) => categories.categoriesList
);

export const selectCategoriesTitles = createSelector(
  [selectCategoriesList],
  (categoriesList) =>
    Object.keys(categoriesList).map(
      (category) => categoriesList[category].title
    )
);
