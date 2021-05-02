const Header = ({ isMenuOpen, setIsMenuOpen }) => {
    const handleToggle = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="header">
            <h1 className="logo">KATH.</h1>

            <div 
                className={`header__toggle ${ isMenuOpen && 'header__toggle--active' }`}
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