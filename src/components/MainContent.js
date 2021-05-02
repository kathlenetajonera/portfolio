import Nav from "./Nav";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";
import Container from "./wrapper/Container";

const MainContent = ({ isMenuOpen }) => {
    return (
        <div className="grid">
            <Nav isMenuOpen={isMenuOpen} />
            <Container title="PORTFOLIO.">
                <Portfolio />
            </Container>
            <Container title="SKILLS.">
                <Skills />
            </Container>
        </div>
    );
}
 
export default MainContent;