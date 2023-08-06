import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <a href="/" className="nav-item">
        Home
      </a>
      <a href="/" className="nav-item">
        About us
      </a>
      <a href="/" className="nav-item">
        Resources
      </a>
    </nav>
  );
};

export default Navbar;
