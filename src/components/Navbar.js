import React from "react";

// REACT SMOOTH SCROLLBAR
import { Link } from "react-scroll";

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
        <Link
          to="intro-wrapper"
          activeClass="link logo-letters"
          smooth={true}
          duration={500}
        >
          <span className="logo-letter logo-first-letter">D</span>
          <span className="logo-letter logo-second-letter">R</span>
        </Link>
      </div>
      <nav className="navbar">
        <FontAwesomeIcon
          icon="bars"
          className="bars-icon"
          onClick={showNavbarMenu}
        />
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link
              to="projects-section"
              activeClass="link navbar-link"
              smooth={true}
              duration={500}
              spy={true}
            >
              Projects
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="about-me-section"
              activeClass="link navbar-link"
              smooth={true}
              duration={500}
              spy={true}
            >
              About Me
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="contact-section"
              activeClass="link navbar-link"
              smooth={true}
              duration={500}
              spy={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
