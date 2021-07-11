import React from "react";
import { Nav } from "./styles/Navbar.style";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <Nav>
      <h1>JECC</h1>
      <div className="menu">
        <Link to="/">About me </Link>
        <Link to="/asd">My Projects </Link>
        <Link to="/asdasd">Contact </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
