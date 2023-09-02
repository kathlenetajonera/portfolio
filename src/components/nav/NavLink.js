import { Link } from "react-scroll";

const NavLink = ({ label, externalUrl }) => {
    return externalUrl ? (
        <a
            href={externalUrl}
            target="_blank"
            className="nav__item"
            rel="noreferrer"
        >
            {label}
        </a>
    ) : (
        <Link
            to={label}
            className="nav__item"
            activeClass="nav__item--active"
            smooth={true}
            spy={true}
        >
            {label}
        </Link>
    );
};

export default NavLink;
