import { Element } from "react-scroll";
import { SkillsList } from "./SkillsList";
import SkillBar from "./SkillIBar";
import Container from "../wrapper/Container";

const Skills = () => {
    return (
        <Element name="skills">
            <Container title="skills.">
                <div className="grid grid--skills">
                    { SkillsList.map(skill => (
                        <SkillBar
                            name={skill.name}
                            icon={skill.icon}
                            percentage={skill.percentage}
                            id={skill.id}
                            key={skill.id}
                        />
                    ))}
                </div>
            </Container>
        </Element>
    );
}
 
export default Skills;