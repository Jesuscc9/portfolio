import React, { useState, useEffect } from "react";
import { Nav } from "./styles/Navbar.style";
import { Link } from "gatsby";
import { useScrollYPosition } from "react-use-scroll-position";
import onClickOutside from "react-onclickoutside";

const Navbar = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);

  const scrollY = useScrollYPosition();

  if (scrollY > 1 && !scrolled) {
    setScrolled(true);
  } else if (scrollY === 0 && scrolled) {
    setScrolled(false);
  }

  const [activeNav, setActiveNav] = useState(false);

  Navbar.handleClickOutside = () => {
    setActiveNav(false);
  };

  useEffect(() => {
    window.scroll({ top: window.scrollY + 1 });
  }, []);

  return (
    <Nav scrolled={scrolled || activeNav} activeNav={activeNav}>
      <svg width="100">
        <text x="0%" y="55%">
          JECC
        </text>
      </svg>
      <div className={`menu ${activeNav && "active-menu"}`}>
        <Link to="/about">
          About me
          <div className="svg-container">
            <svg viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
          </div>
        </Link>
        <Link to="/asd">
          My Projects
          <div className="svg-container">
            <svg viewBox="0 0 70 36" className="svg-2">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
          </div>
        </Link>
        <a
          onClick={() => {
            console.log("xd");
            onContactClick();
          }}
        >
          Contact
          <div className="svg-container">
            <svg viewBox="0 0 70 36" className="svg-3">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
          </div>
        </a>
      </div>

      <div
        className={`nav-icon ${activeNav && "open"}`}
        onClick={(e) => {
          setActiveNav(!activeNav);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Nav>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => Navbar.handleClickOutside,
};

export default onClickOutside(Navbar, clickOutsideConfig);
