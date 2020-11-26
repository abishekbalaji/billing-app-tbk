import { createSelector } from "reselect";

const selectCategoryItemsList = (state) => state.categoryItemsList;

export const selectCategoryItems = createSelector(
  [selectCategoryItemsList],
  (categoryItemsList) => categoryItemsList.categoryItems
);
