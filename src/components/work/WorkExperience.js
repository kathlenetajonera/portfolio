import { WorkExperienceList } from "./WorkExperienceList";
import WorkCard from "./WorkCard";
import Container from "../wrapper/Container";

const WorkExperience = () => {
    return (
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
    );
}
 
export default WorkExperience;