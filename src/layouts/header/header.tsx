import { useState } from "react";
import "./header.css";
import { Logo } from "./logo/logo";
import { NavLinks } from "./navlinks/navlinks";

export const Header = () => {
  return (
    <nav className="HeaderNavigation">
      <div className="HeaderContainer">
        <div className="HeaderLeftContent">
          <Logo />
          <NavLinks />
        </div>
        {/* Button Links */}
        <div className="HeaderRightContent">
          <button
            className="Button Button_reversedPrimary Button_medium Button_content_medium"
            type="button"
          >
            <span>Developer login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
