import "./Header.scss";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./NavbarLogo.svg";
console.log(useLocation);

const Header = () => {
  return (
    <header className="header-page">
      <Link to="/">
        <img className="header-img" alt="kasa logo" src={logo}></img>
      </Link>

      <nav className="navbar">
        <Link to="/">ACCEUIL</Link>
        <Link to="about">A PROPOS</Link>
      </nav>
    </header>
  );
};
export default Header;
