import bgPattern from "../images/patterns/bg-pattern-intro-right-desktop.svg";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";
import WorkExperience from "./work/WorkExperience";
import Download from "./Download";
import useResize from "./hooks/useResize";

const MainContent = () => {
    const { windowWidth } = useResize();

    return (
        <div className="main-content">
            <Portfolio />
            <Skills />
            <WorkExperience />

            <Download />

            {windowWidth >= 1024 && (
                <img
                    src={bgPattern}
                    alt="pattern"
                    className="main-content__bg"
                />
            )}
        </div>
    );
};

export default MainContent;
