import NavLink from "./NavLink";

const Nav = ({ isMenuOpen }) => {
    return (
        <nav className={`nav ${isMenuOpen && `nav--active`}`}>
            <ul className="nav__menu">
                <NavLink label="portfolio" />
                <NavLink label="skills" />
                <NavLink label="work experience" />
                <NavLink label="contact" />
            </ul>

            <div className="nav__icons">
                <i className="nav__icon fab fa-github" />
                <i className="nav__icon fab fa-linkedin-in" />
            </div>
        </nav>
    );
}
 
export default Nav;