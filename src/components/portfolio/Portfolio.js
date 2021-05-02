import PortfolioCard from "./PortfolioCard";
import { ProjectList } from "./ProjectList";

const Portfolio = () => {
    return (
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
    );
}
 
export default Portfolio;