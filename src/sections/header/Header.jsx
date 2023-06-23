import React, { useState } from "react";
import "./headerStyles.css";

export const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleResponsiveNav = () => {
    setNavActive(!navActive);
  };

  const handleNavLinkClick = () => {
    setNavActive(false);
  };

  return (
    <header className={`contained ${navActive ? "active" : ""}`}>
      <h1 className="visually-hidden">
        An architecture and interior design firm
      </h1>
      <a href="/" className="logo">
        AOV Studios
      </a>

      <span
        className={`menu-icon hamburger-menu ${navActive ? "active" : ""}`}
        onClick={toggleResponsiveNav}
      >
        &#9776;
      </span>
      <nav className={`nav ${navActive ? "active" : ""}`}>
        <span
          className={`menu-icon close-menu ${
            navActive ? "contained active" : ""
          }`}
          onClick={toggleResponsiveNav}
        >
          &#215;
        </span>
        <ul className={`nav-list ${navActive ? "contained" : ""}`}>
          <li>
            <a href="/" onClick={handleNavLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleNavLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleNavLinkClick}>
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={handleNavLinkClick}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#footer" onClick={handleNavLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
