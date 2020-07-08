import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <div className="Header">
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Tools</li>
        <li>Projects</li>
      </ul>
    </div>
  );
}

export default Header;
