import itemDisplayActionTypes from "./items.types";

export const displayItems = (categoryItems) => ({
  type: itemDisplayActionTypes.DISPLAY_ITEMS,
  payload: categoryItems,
});
