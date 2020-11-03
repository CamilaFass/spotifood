// action creator for set filter action
function setFilter(filters) {
  return { payload: filters, type: "SET_FILTERS" };
}

export { setFilter };
