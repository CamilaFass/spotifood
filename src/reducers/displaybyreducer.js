//CONSTANTS

const INITIAL_STATE = {
  displayBy: "grid",
};

// reducer for display by state
function displayByReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_DISPLAY":
      return { ...state, displayBy: action.payload };

    default:
      return state;
  }
}

export { displayByReducer };
