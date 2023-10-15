import { Link } from "react-scroll";

const NavLink = ({ label }) => {
    return (
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
