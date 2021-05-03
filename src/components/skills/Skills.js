import Container from "../wrapper/Container";
import { SkillsList } from "./SkillsList";
import SkillBar from "./SkillIBar";

const Skills = () => {
    return (
        <Container title="SKILLS.">
            <div className="grid grid--skills">
                { SkillsList.map(skill => (
                    <SkillBar
                        title={skill.name}
                        icon={skill.icon}
                        percentage={skill.percentage}
                        id={skill.id}
                        key={skill.id}
                    />
                ))}
            </div>
        </Container>
    );
}
 
export default Skills;