import React from "react";
import { NavLink } from "react-router-dom";
import "./Trending.css";

function Trending({ item }) {
  return (
    <div className="listItem">
      <NavLink to="/Movie" state={{ movieItem: item }}>
        <img src={item.imageurl} alt="image1" />
      </NavLink>
    </div>
  );
}

export default Trending;
