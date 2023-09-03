import { Element } from "react-scroll";
import { SkillsList } from "./SkillsList";
import Container from "../wrapper/Container";

const Skills = () => {
    return (
        <Element name="about">
            <Container title="about.">
                <div className="grid grid--skills">
                    <div>
                        <p>Hi, I'm Kathlene Tajonera.</p>
                        <br />
                        <p>
                            I'm a <b>Front-End Developer</b> with experience
                            building various projects, from static websites,
                            custom WordPress sites, React JS web apps, up to
                            React Native mobile apps.
                        </p>
                    </div>

                    <div className="skill-tags">
                        {SkillsList.map(({ id, name }) => (
                            <span key={id} className="skill-tag">
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </Container>
        </Element>
    );
};

export default Skills;
