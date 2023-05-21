import { NavbarUtils } from '../../../utils/NavbarUtils'

export const NavLinks = () => {
    return (
        <>
            {NavbarUtils.Links?.map((navLink) => (
                <a
                    key={navLink.href}
                    className="body2 NavigationElement"
                    href={navLink.href}
                >
                    {navLink.title}
                </a>
            ))}
        </>
    )
}
