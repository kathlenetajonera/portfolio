import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";
import WorkExperience from "./work/WorkExperience";
import Contact from "./contact/Contact";
import Download from "./Download";

const MainContent = () => {
    return (
        <div className="main-content">
            <Portfolio />
            <Skills />
            <WorkExperience />
            <Contact />

            <Download />
        </div>
    );
}
 
export default MainContent;