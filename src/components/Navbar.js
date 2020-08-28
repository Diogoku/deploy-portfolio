import React from "react";

// REACT ROUTER
import { NavLink, Link } from "react-router-dom";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CSS
import "../css/navbar.css";

function Navbar() {
  const showNavbarMenu = () => {
    const navbarLinks = document.querySelector(".navbar-nav");
    const navbarItems = document.querySelectorAll(".navbar-item");

    navbarLinks.classList.toggle("navbar-active");

    navbarItems.forEach((navItem, index) => {
      if (navItem.style.animation) navItem.style.animation = "";
      else
        navItem.style.animation = `navbar-link-fade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
    });
  };

  return (
    <div className="header">
      <div className="logo-wrapper">
        <NavLink to="/" className="link logo-letters">
          <span className="logo-letter logo-first-letter">D</span>
          <span className="logo-letter logo-second-letter">R</span>
        </NavLink>
      </div>
      <nav className="navbar">
        <FontAwesomeIcon
          icon="bars"
          className="bars-icon"
          onClick={showNavbarMenu}
        />
        <ul className="navbar-nav">
          <li className="navbar-item">
            <a href="#projects-section" className="link navbar-link">
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about-me-section" className="link navbar-link">
              About Me
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact-section" className="link navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
