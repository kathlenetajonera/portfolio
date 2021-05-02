import { SkillsList } from "./SkillsList";
import SkillItem from "./SkillItem";

const Skills = () => {
    return (
        <div className="grid grid--skills">
            { SkillsList.map(skill => (
                <SkillItem 
                    title={skill.title}
                    icon={skill.icon}
                    percentage={skill.percentage}
                    id={skill.id}
                    key={skill.id}
                />
            ))}
        </div>
    );
}
 
export default Skills;