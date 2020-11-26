import { combineReducers } from "redux";

import categoriesReducer from "./categories/categories.reducer";
import itemsReducer from "./items-display/items.reducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  categoryItemsList: itemsReducer,
});

export default rootReducer;
