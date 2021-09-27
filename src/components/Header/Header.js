import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="header-info">
          <h1>Top 10 tech billinaires in the world</h1>
          <h2>Total Budget: $1000 billion</h2>
          <h3>Let's know about themselves</h3>
        </div>
        <div>
          <nav>
            <a href="">Daily tech </a>
            <a href="">Invention </a>
            <a href="">Science </a>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;
