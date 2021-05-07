import { useEffect } from "react";
import useResize from "./hooks/useResize";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
    const { windowWidth } = useResize();
    const handleToggle = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        if (windowWidth >= 1024) setIsMenuOpen(false);
    }, [windowWidth, setIsMenuOpen])

    return (
        <header className="header">
            <h1 className="logo">kath.</h1>

            <div 
                className={`header__toggle ${ isMenuOpen ? 'header__toggle--active' : '' }`}
                onClick={handleToggle}
            >
                <div className="header__burger header__burger--first" />
                <div className="header__burger header__burger--mid" />
                <div className="header__burger header__burger--last" />
            </div>
        </header>
    );
}
 
export default Header;