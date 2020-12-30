import React from "react";
import "./Hamburger.scss";

export interface HamburgerProps {
  open: boolean;
  toggleState: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ open, toggleState }) => {
  return (
    <div
      className={`hamburger-container ${open ? "" : ""}`}
      onClick={toggleState}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default Hamburger;
