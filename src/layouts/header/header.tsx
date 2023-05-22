import './header.css'
import { NavLinks } from './NavLinks/NavLinks'
import { SocialIcon } from 'react-social-icons'

export const Header = () => {
    return (
        <nav className="HeaderNavigation">
            <div className="HeaderContainer">
                <div className="HeaderLeftContent">
                    <a href="/">
                        <h1>To.do</h1>
                    </a>
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
