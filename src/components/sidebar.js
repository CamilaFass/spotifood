import React from "react";
import { Filter } from "./filter.js";
import "./styles/sidebar.css";
import filterlogo from "../assets/filterlogo.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        alt="logo"
        className="sidelogo"
        src={filterlogo}
        height="80"
        width="192"
      ></img>
      <Filter />
    </div>
  );
}

export { Sidebar };
