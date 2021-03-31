import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export interface NavItemProps {
  to: string;
  text: string;
  exact?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ text, to, exact = false }) => {
  return (
    <NavLink
      exact={exact}
      activeClassName="active"
      className="nav-item"
      to={to}
    >
      {text}
    </NavLink>
  );
};

export default NavItem;
