import itemDisplayActionTypes from "./items.types";

const INITIAL_STATE = {
  categoryItems: [],
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case itemDisplayActionTypes.DISPLAY_ITEMS:
      return {
        ...state,
        categoryItems: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
