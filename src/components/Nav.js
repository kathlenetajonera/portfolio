import { Link } from "react-scroll";
import useResize from "./hooks/useResize";

const Nav = ({ isMenuOpen }) => {
    const { windowWidth } = useResize();


    return (
        <nav className={`nav ${isMenuOpen && `nav--active`}`}>
            <h1 className="nav__logo">KATH.</h1>

            <ul className="nav__menu">
                <Link 
                    to="portfolio"
                    className="nav__item" 
                    activeClass="nav__item--active"
                    smooth={true}
                    spy={true}
                >
                    Portfolio
                </Link>

                <Link 
                    to="skills"
                    className="nav__item" 
                    activeClass="nav__item--active"
                    smooth={true}
                    spy={true}
                    offset={windowWidth < 1024 ? -80 : 0}
                >
                    Skills
                </Link>

                <Link 
                    to="work"
                    className="nav__item" 
                    activeClass="nav__item--active"
                    smooth={true}
                    spy={true}
                    offset={-200}
                >
                    Work Experience
                </Link>

                <Link 
                    to="contact"
                    className="nav__item" 
                    activeClass="nav__item--active"
                    smooth={true}
                    spy={true}
                    // offset={-200}
                >
                    Contact
                </Link>
            </ul>

            <div className="nav__icons">
                <i className="nav__icon fab fa-github" />
                <i className="nav__icon fab fa-linkedin-in" />
            </div>
        </nav>
    );
}
 
export default Nav;