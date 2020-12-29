import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { ReactComponent as AlobaLogo } from "../../../assets/aloba.svg";
import { ReactComponent as Close } from "../../../assets/close.svg";
import { ReactComponent as FacebookLogo } from "../../../assets/facebook.svg";
import { ReactComponent as InstagramLogo } from "../../../assets/instagram.svg";

export interface SidebarProps {
  open: boolean;
  toggleState: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleState }) => {
  return (
    <div className={`sidebar-container ${open ? "open" : ""}`}>
      <div className="sidebar">
        <div className="sidebar-navigation">
          <AlobaLogo />
          <button className="sidebar-close" onClick={toggleState}>
            <Close />
          </button>
        </div>
        <div className="sidebar-menu-items">
          <Link to="/">Home</Link>
          <Link to="/recept">Recept</Link>
        </div>
        <div className="social-media">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/alobafoods/"
          >
            <InstagramLogo />
          </a>
          <a target="_blank" rel="noreferrer" href="">
            <FacebookLogo />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
