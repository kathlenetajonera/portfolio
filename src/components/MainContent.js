import Contact from "./contact/Contact";
import Nav from "./Nav";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";
import WorkExperience from "./work/WorkExperience";

const MainContent = ({ isMenuOpen }) => {
    return (
        <div className="grid">
            <Nav isMenuOpen={isMenuOpen} />
            <Portfolio />
            <Skills />
            <WorkExperience />
            <Contact />
        </div>
    );
}
 
export default MainContent;