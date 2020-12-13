import React, { useState } from "react";
import "./Hamburger.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleState = () => {
    setOpen(!open);
  }

  return (
    <div className={`container ${open ? 'open' : ''}`} onClick={toggleState}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default Navbar;
