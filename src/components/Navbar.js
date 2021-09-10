import React, { useState, useEffect } from "react";
import { Nav } from "./styles/Navbar.style";
import { Link } from "gatsby";
import onClickOutside from "react-onclickoutside";
import { watchViewport } from "tornis";

function Navbar({
  onContactClick,
  onAboutClick,
  onProjectsClick,
  titleColor,
  menuColor,
}) {
  const [scrolled, setScrolled] = useState(false);

  const updateValues = ({ scroll }) => {
    if (scroll.changed) {
      if (scroll.top > 1 && !scrolled) {
        setScrolled(true);
      } else if (scroll.top == 0 && scrolled) {
        setScrolled(false);
      }
    }
  };

  watchViewport(updateValues);

  const [activeNav, setActiveNav] = useState(false);

  Navbar.handleClickOutside = () => {
    setActiveNav(false);
  };

  return (
    <Nav
      scrolled={scrolled || activeNav}
      activeNav={activeNav}
      titleColor={titleColor}
      menuColor={menuColor}
    >
      <div className="title-container">
        <Link to="/">
          <svg>
            <text
              x="0%"
              y="55%"
              lengthAdjust="spacingAndGlyphs"
              fontSizeAdjust="0.58"
            >
              JECC
            </text>
          </svg>
        </Link>
      </div>
      <div className={`menu ${activeNav && "active-menu"}`}>
        <a
          onClick={() => {
            onAboutClick();
          }}
        >
          About me
          <div className="svg-container">
            <svg viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
          </div>
        </a>
        <a
          onClick={() => {
            onProjectsClick();
          }}
        >
          My Projects
          <div className="svg-container">
            <svg viewBox="0 0 70 36" className="svg-2">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
          </div>
        </a>
        <a
          onClick={() => {
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
}

const clickOutsideConfig = {
  handleClickOutside: () => Navbar.handleClickOutside,
};

export default onClickOutside(Navbar, clickOutsideConfig);
