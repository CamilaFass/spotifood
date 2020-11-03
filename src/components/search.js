import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions/searchactions.js";
import "./styles/search.css";

function Search() {
  // component dispatch
  const dispatch = useDispatch();

  // function to handle change on input
  function handleChange(event) {
    const value = event.target.value;

    // dispatch to store new search value
    dispatch(actions.setSearchValue(value));
  }

  return (
    <div className="search">
      <input
        className="searchinput"
        type="text"
        placeholder="Search Playlist"
        onChange={handleChange}
      ></input>
    </div>
  );
}

export { Search };
