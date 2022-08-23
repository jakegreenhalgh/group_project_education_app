import React from "react";
import { Link } from "react-router-dom";

// sets up nav bar and what each link will be called (Links are rendered as html a tags)
const NavBar = () => {

  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
      <li>
        <Link to="/statistics">Statistics</Link>
      </li>
    </ul>
  );
}

export default NavBar;