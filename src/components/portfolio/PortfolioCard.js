import { useState, useEffect, useRef } from "react";

const PortfolioCard = ({ name, preview, liveSite, sourceCode }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const handleClick = () => setIsSelected(true);
    const cardRef = useRef()

    useEffect(() => {
        const currentCard = cardRef.current;
        const hoverListener = () => setIsHovered(!isHovered);

        currentCard.addEventListener("mouseenter", hoverListener);
        currentCard.addEventListener("mouseleave", hoverListener);

        return () => {
            currentCard.removeEventListener("mouseover", hoverListener)
            currentCard.removeEventListener("mouseleave", hoverListener)
        };
    })

    return (
        <div 
            className="card"
            onClick={handleClick}
            ref={cardRef}
        >
            <div className="card__wrapper">
                <img src={preview} alt={name} className="card__image"/>

                <div className={`card__buttons ${(isSelected || isHovered) && 'card__buttons--active'}`}>
                    <a href={liveSite} className="card__link">Live Site</a>
                    <a href={sourceCode} className="card__link">Source Code</a>
                </div>
            </div>

            <p className="card__title">{name}</p>
        </div>
    );
}
 
export default PortfolioCard;