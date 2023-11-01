import React from "react";
import { NavLink } from "react-router-dom";

function Scific({ item }) {
  return (
    <div>
      <div className="listItem">
        <NavLink to="/Movie" state={{ movieItem: item }}>
          <img src={item.imageurl} alt="image1" />
        </NavLink>
      </div>
    </div>
  );
}

export default Scific;
