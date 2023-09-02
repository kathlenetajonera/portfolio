import { Element } from "react-scroll";
import { WorkExperienceList } from "./WorkExperienceList";
import WorkCard from "./WorkCard";
import Container from "../wrapper/Container";

const WorkExperience = () => {
    return (
        <Element name="work experience">
            <div className="work-section">
                <Container title="work experience.">
                    {WorkExperienceList.map((work) => (
                        <WorkCard
                            position={work.position}
                            company={work.company}
                            date={work.date}
                            companyLogo={work.companyLogo}
                            tasks={work.tasks}
                            key={work.company}
                        />
                    ))}
                </Container>
            </div>
        </Element>
    );
};

export default WorkExperience;
