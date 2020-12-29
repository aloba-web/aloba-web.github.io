import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Hamburger from "../Hamburger";
import Sidebar from "./Sidebar";
import { ReactComponent as AlobaLogo } from "../../assets/aloba.svg";

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleState = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Hamburger open={open} toggleState={toggleState} />
      <Sidebar open={open} toggleState={toggleState} />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <AlobaLogo />
      </Link>
      <NavigationMenu />
    </nav>
  );
};

export default Navbar;
