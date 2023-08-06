import React from "react";
import Navbar from "../Navbar";
import logo from "../../assets/logo.png";

import "./styles.css";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} className="logo" alt="logo" />
      <Navbar />
      <div />
    </div>
  );
};

export default Header;
