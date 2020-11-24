import CATEGORIES_DATA from "./categories.data";

const INITIAL_STATE = {
  categoriesList: CATEGORIES_DATA,
};

const CategoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CategoriesReducer;
