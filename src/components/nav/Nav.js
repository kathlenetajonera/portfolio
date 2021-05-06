import bgPattern from "../../images/patterns/bg-pattern-intro-left-desktop.svg";
import useResize from "../hooks/useResize";
import NavLink from "./NavLink";

const Nav = ({ isMenuOpen }) => {
    const { windowWidth }= useResize();
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

            { windowWidth >= 1024 && <img src={bgPattern} alt="pattern" className="nav__bg" /> }
        </nav>
    );
}
 
export default Nav;