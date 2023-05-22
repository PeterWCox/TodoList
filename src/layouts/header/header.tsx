import { useState } from 'react'
import './header.css'
import { Logo } from './logo/logo'
import { NavLinks } from './NavLinks/NavLinks'
import { SocialIcon } from 'react-social-icons'
import Hamburger from 'hamburger-react'

export const Header = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <nav className="HeaderNavigation">
            <div className="HeaderContainer">
                <div className="HeaderLeftContent">
                    <h1>To.do</h1>
                    <NavLinks />
                </div>
                {/* Button Links */}
                <div className="HeaderRightContent">
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '1rem',
                            backgroundColor: 'white',
                            padding: '0.5rem',
                        }}
                    >
                        <SocialIcon url="https://github.com/PeterWCox" />
                        <SocialIcon url="https://www.linkedin.com/in/peter-cox-2a9a71143/" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
