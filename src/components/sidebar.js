import React from "react";
import { Filter } from "./filter.js";
import "./styles/sidebar.css";
import icon from "../assets/spotifyicon.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        alt="logo"
        className="sidelogo"
        src={icon}
        height="80"
        width="192"
      ></img>
      <Filter />
    </div>
  );
}

export { Sidebar };
