import NavLink from "./NavLink";

const Nav = ({ isMenuOpen }) => {
    return (
        <nav className={`nav ${isMenuOpen ? `nav--active` : ''}`}>
            <ul className="nav__menu">
                <NavLink label="portfolio" />
                <NavLink label="skills" />
                <NavLink label="work experience" />
                <NavLink label="contact" />
            </ul>

            <div className="nav__icons">
                <a href="https://github.com/ktj13" target="_blank" rel="noreferrer">
                    <i className="nav__icon fab fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/kathlenetajonera/" target="_blank" rel="noreferrer">
                    <i className="nav__icon fab fa-linkedin-in" />
                </a>
            </div>
        </nav>
    );
}
 
export default Nav;