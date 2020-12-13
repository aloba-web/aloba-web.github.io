import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Hamburger from '../Hamburger'

const NavigationMenu = () => {
  return <div>
    <Hamburger />
    Sidebar
    </div>;
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Navigation</Link>
      <NavigationMenu />
    </nav>
  );
};

export default Navbar;
