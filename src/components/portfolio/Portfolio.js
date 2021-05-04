import { Element } from "react-scroll";
import { ProjectList } from "./ProjectList";
import PortfolioCard from "./PortfolioCard";
import Container from "../wrapper/Container";

const Portfolio = () => {
    return (
        <Element name="portfolio">
            <Container title="PORTFOLIO.">
                <div className="grid grid--portfolio">
                    {ProjectList.map(project => (
                        <PortfolioCard 
                            name={project.name}
                            preview={project.preview}
                            liveSite={project.liveSite}
                            sourceCode={project.sourceCode}
                            key={project.name}
                        />
                    ))}
                </div>
            </Container>
        </Element>
    );
}
 
export default Portfolio;