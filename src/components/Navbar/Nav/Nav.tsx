import React from "react";
import NavItem from "./NavItem";
import "./Nav.scss";

export interface NavProps {}

const Sidebar: React.FC<NavProps> = () => {
  return (
    <div className="nav">
      <div className="items">
        <NavItem to="/products" text="Produkter" />
        <NavItem to="/stores" text="Butiker" />
        <NavItem to="/about" text="Om oss" />
        <NavItem to="/recipes" text="Recept" />
        <NavItem to="/faq" text="Frågor & Svar" />
        <NavItem to="/contact" text="Kontakt" />
      </div>
    </div>
  );
};

export default Sidebar;
