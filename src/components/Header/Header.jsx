import "./Header.scss";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./NavbarLogo.svg";

const Header = () => {
  const location = useLocation();
  return (
    <header className="header-page">
      <Link to="/">
        <img className="header-img" alt="kasa logo" src={logo}></img>
      </Link>

      <nav className="navbar">
        <Link
          style={{
            textDecoration: location.pathname === "/" ? "underline" : undefined,
          }}
          to="/"
        >
          ACCEUIL
        </Link>
        <Link
          style={{
            textDecoration:
              location.pathname === "/about" ? "underline" : undefined,
          }}
          to="about"
        >
          A PROPOS
        </Link>
      </nav>
    </header>
  );
};
export default Header;
