import "./header.css";

export const Header = () => {
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
            <li className="header-link">
              <a className="nav-link" href="/uk-nature-carbon/">
                UK Nature Carbon
              </a>
            </li>
            <li className="header-link">
              <a className="nav-link" href="/seed/">
                Seed
              </a>
            </li>
            <li className="header-link">
              <a className="nav-link" href="/about/">
                About
              </a>
            </li>
            <li className="header-link">
              <a className="nav-link" href="/blog/">
                Blog
              </a>
            </li>
          </ul>
          {/* Get listed */}
          <button className="get-listed">
            <a href="/get-listed/">Get listed</a>
          </button>
          {/* Visit the directory */}
          <button className="directory">
            <a href="https://web.kana.earth/p/projects">Visit the directory</a>
          </button>
        </div>
        {/* Hamburger menu */}
        <button className="links-bar" title="XXXX">
          <img
            src="https://www.kana.earth/images/get-listed/svg/nav-bar.svg"
            alt=""
          />
        </button>
      </div>
      {/* Dropdown full-screen */}
      <div className="links-dropdown">
        <button className="close">
          <img src="/images/get-listed/svg/close.svg" alt="close" />
        </button>
        <ul className="header-links">
          <li className="header-link">
            <a className="nav-link" href="/uk-nature-carbon/">
              UK Nature Carbon
            </a>
          </li>
          <li className="header-link">
            <a className="nav-link" href="/seed/">
              Seed
            </a>
          </li>
          <li className="header-link">
            <a className="nav-link" href="/about/">
              About
            </a>
          </li>
          <li className="header-link">
            <a className="nav-link" href="/blog/">
              Blog
            </a>
          </li>
        </ul>
        <button className="get-listed">
          <a href="/get-listed/">Get listed</a>
        </button>
        <button className="directory">
          <a href="https://web.kana.earth/p/projects">Visit the directory</a>
        </button>
      </div>
    </section>
  );
};
