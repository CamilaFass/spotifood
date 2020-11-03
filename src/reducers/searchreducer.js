const INITIAL_STATE = {
  searchValue: "",
};

// reducer for search state
function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_SEARCH_VALUE":
      const searchValue = action.payload;
      return { ...state, searchValue };

    default:
      return state;
  }
}

export { searchReducer };
