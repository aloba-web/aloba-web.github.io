import React from "react";
import "./Footer.scss";
import { ReactComponent as AlobaLogoNegative } from "../../assets/aloba-logo-negative.svg";
import { ReactComponent as InstagramLogoNegative } from "../../assets/instagram-logo-negative.svg";
import { ReactComponent as FacebookLogoNegative } from "../../assets/facebook-logo-negative.svg";
import { Link } from "react-router-dom";

export interface FooterProps {}

const links: Array<{ label: string; path: string }> = [
  { label: "Produkter", path: "/produkter" },
  { label: "Om Aloba", path: "/about" },
  { label: "Frågor och svar", path: "/faq" },
  { label: "Kontakta oss", path: "/contact" },
];

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        {links.map((link, index) => (
          <Link key={index} to={link.path}>{link.label}</Link>
        ))}
      </div>
      <div className="footer-right">
        <AlobaLogoNegative />
        <div className="social-media-icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/alobafoods/"
          >
            <InstagramLogoNegative />
          </a>
          <a target="_blank" rel="noreferrer" href="">
            <FacebookLogoNegative />
          </a>
        </div>
        <div className="social-media-attr">
          <span>@alobafoods</span>
          <span>#aloba</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
