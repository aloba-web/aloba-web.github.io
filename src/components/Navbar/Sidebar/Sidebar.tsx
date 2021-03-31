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
      <div className="sidebar-background" onClick={toggleState} />
      <div className="sidebar">
        <div className="sidebar-navigation side-margin">
          <AlobaLogo />
          <button
            aria-label="close sidebar"
            className="sidebar-close"
            onClick={toggleState}
          >
            <Close />
          </button>
        </div>
        <div className="sidebar-menu-items side-margin">
          <Link to="/">Hem</Link>
          <Link to="/products">Produkter</Link>
          <Link to="/stores">Butiker</Link>
          <Link to="/about">Om oss</Link>
          <Link to="/recipes">Recept</Link>
          <Link to="/faq">Frågor & svar</Link>
          <Link to="/contact">Kontakt</Link>
        </div>
        <div className="social-media side-margin">
          <a
            aria-label="instagram"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/alobafoods/"
          >
            <InstagramLogo />
          </a>
          <a
            aria-label="facebook"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/alobafoods"
          >
            <FacebookLogo />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
