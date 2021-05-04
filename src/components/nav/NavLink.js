import { Link } from "react-scroll";
import useResize from "../hooks/useResize";

const NavLink = ({ label }) => {
    const { windowWidth } = useResize();

    return (
        <Link 
            to={label}
            className="nav__item" 
            activeClass="nav__item--active"
            smooth={true}
            spy={true}
            offset={windowWidth < 1024 ? -80 : 0}
        >
            {label}
        </Link>
    );
}
 
export default NavLink;