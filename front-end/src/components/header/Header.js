import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      <img style={{ paddingLeft: "20px" }} src="../images/WatchFlix.png" />
      <div>
        <NavLink to="/">Movies</NavLink>
        <NavLink to="/Tvseries">TV Series</NavLink>
        <NavLink to="/Documentaries">Documentaries</NavLink>
        <NavLink to="/Categories">Categories</NavLink>
        <NavLink to="/Subcription">Subcription</NavLink>
      </div>
      <div className="headLast">
        <img src="../images/search.png" alt="logo" />
        <img
          style={{ paddingLeft: "50px" }}
          src="../images/bell.png"
          alt="logo"
        />
        <Link style={{ paddingLeft: "40px" }} to="#">
          <b>Sign Up</b>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
