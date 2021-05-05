import { useState } from "react";

const PortfolioCard = ({ name, preview, liveSite, sourceCode }) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleClick = () => setIsSelected(true);

    return (
        <div 
            className="card"
            onClick={handleClick}
        >
            <div className="card__wrapper">
                <img 
                    src={preview} 
                    alt={name} 
                    className="card__image"
                />

                <div className={`card__buttons ${(isSelected) && 'card__buttons--active'}`}>
                    <a 
                        href={liveSite} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card__link" 
                    >
                        Live Site
                    </a>
                    <a 
                        href={sourceCode} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card__link" 
                        >
                        Source Code
                    </a>
                </div>
            </div>

            <p className="card__title">{name}</p>
        </div>
    );
}
 
export default PortfolioCard;