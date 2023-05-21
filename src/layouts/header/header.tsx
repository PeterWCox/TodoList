import { useState } from "react";
import "./header.css";
import { Logo } from "./logo/logo";
import { NavLinks } from "./navlinks/navlinks";
import { Button } from "../../lib/Button/Button";

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
          <Button
            text={"Developer Login"}
            type={"tertiary"}
            size={"medium"}
            content={"medium"}
          />
        </div>
      </div>
    </nav>
  );
};
