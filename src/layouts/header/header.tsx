import { useState } from "react";
import "./header.css";
import { CtaLinks, NavbarLinks } from "./headerLinks";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <section className="header-wrapper">
      <div className="header">
        {/* Logo */}
        <a href="/" className="logo">
          <img
            src="https://www.kana.earth/images/get-listed/svg/logo.svg"
            alt="Logo"
          />
        </a>
        <div className="header-nav">
          {/* Navbar items */}
          <ul className="header-links">
            {NavbarLinks.map((link) => (
              <li key={link.title} className="header-link">
                <a className="nav-link" href={link.link}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          {/* Get listed */}
          {CtaLinks.map((link) => (
            <button key={link.title} className="get-listed">
              <a href={link.link}>{link.title}</a>
            </button>
          ))}
        </div>
        {/* Hamburger menu */}
        <button
          className="links-bar"
          title="XXXX"
          onClick={() => {
            setShowDropdown(true);
          }}
        >
          <img
            src="https://www.kana.earth/images/get-listed/svg/nav-bar.svg"
            alt=""
          />
        </button>
      </div>
      {/* Dropdown full-screen */}
      <div className={`links-dropdown ${showDropdown ? "show" : null}`}>
        <button
          className="close"
          onClick={() => {
            setShowDropdown(false);
          }}
        >
          <img
            src="https://www.kana.earth/images/get-listed/svg/close.svg"
            alt="close"
          />
        </button>
        <ul className="header-links">
          {NavbarLinks.map((link) => (
            <li key={link.title} className="header-link">
              <a className="nav-link" href={link.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        {CtaLinks.map((link) => (
          <button key={link.title} className="get-listed">
            <a href={link.link}>{link.title}</a>
          </button>
        ))}
      </div>
    </section>
  );
};
