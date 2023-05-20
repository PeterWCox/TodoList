import { NavbarUtils } from "../../../utils/NavbarUtils";

export const NavLinks = () => {
  return (
    <>
      {NavbarUtils.Links?.map((navLink) => (
        <a className="body2 NavigationElement" href={navLink.href}>
          {navLink.title}
        </a>
      ))}
    </>
  );
};
