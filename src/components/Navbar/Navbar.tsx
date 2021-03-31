import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import useWindowSize from "../../hooks/useWindowSize";
import Hamburger from "../Hamburger";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import { ReactComponent as AlobaLogo } from "../../assets/aloba.svg";

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  const { isDesktop } = useWindowSize();
  const toggleState = () => {
    setOpen(!open);
  };
  return (
    <div>
      {!isDesktop ? (
        <>
          <Hamburger open={open} toggleState={toggleState} />
          <Sidebar open={open} toggleState={toggleState} />
        </>
      ) : (
        <Nav />
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link aria-label="navigation home" to="/">
        <AlobaLogo />
      </Link>
      <NavigationMenu />
    </nav>
  );
};

export default Navbar;
