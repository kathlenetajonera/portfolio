const Nav = ({ isMenuOpen }) => {
    return (
        <nav className={`nav ${isMenuOpen && `nav--active`}`}>
            <h1 className="nav__logo">KATH.</h1>

            <ul className="nav__menu">
                <li className="nav__item nav__item--active">Portfolio</li>
                <li className="nav__item">Skills</li>
                <li className="nav__item">Work Experience</li>
                <li className="nav__item">Contact</li>
            </ul>

            <div className="nav__icons">
                <i className="nav__icon fab fa-github" />
                <i className="nav__icon fab fa-linkedin-in" />
            </div>
        </nav>
    );
}
 
export default Nav;