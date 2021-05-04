import { Element } from "react-scroll";
import { WorkExperienceList } from "./WorkExperienceList";
import WorkCard from "./WorkCard";
import Container from "../wrapper/Container";

const WorkExperience = () => {
    return (
        <Element name="work">
            <Container title="WORK EXPERIENCE.">
                { WorkExperienceList.map(work => (
                    <WorkCard 
                        company={work.company}
                        date={work.date}
                        companyLogo={work.companyLogo}
                        tasks={work.tasks}
                        key={work.company}
                    />
                )) }
            </Container>
        </Element>
    );
}
 
export default WorkExperience;