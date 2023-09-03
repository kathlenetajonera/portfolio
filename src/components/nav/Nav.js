import { useState, useEffect } from "react";
import bgPattern from "../../images/patterns/bg-pattern-intro-left-desktop.svg";
import useResize from "../hooks/useResize";
import NavLink from "./NavLink";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { windowWidth } = useResize();
    const handleToggle = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        if (windowWidth >= 1024) setIsMenuOpen(false);
    }, [windowWidth, setIsMenuOpen]);

    return (
        <nav className={`nav ${isMenuOpen ? "nav--active" : ""}`}>
            <h1 className="nav__logo">kath.</h1>

            <div className={`nav__toggle`} onClick={handleToggle}>
                <div className="nav__burger nav__burger--first" />
                <div className="nav__burger nav__burger--mid" />
                <div className="nav__burger nav__burger--last" />
            </div>

            <ul className="nav__menu">
                <div className="nav__list">
                    <NavLink label="about" />
                    <NavLink label="portfolio" />
                    <NavLink label="work experience" />
                </div>

                <div className="nav__icons">
                    <a
                        href="https://github.com/kathlenetajonera"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="nav__icon fab fa-github" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kathlenetajonera/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="nav__icon fab fa-linkedin-in" />
                    </a>
                    <a
                        href="mailto:kathtajonera@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="nav__icon far fa-envelope" />
                    </a>
                </div>
            </ul>

            {windowWidth >= 1024 && (
                <img src={bgPattern} alt="pattern" className="nav__bg" />
            )}
        </nav>
    );
};

export default Nav;
