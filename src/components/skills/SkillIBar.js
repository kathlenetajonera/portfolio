import { useEffect, useRef, useState } from "react";

const SkillBar = ({ name, icon, percentage, id }) => {
    const [isActive, setIsActive] = useState(false);
    const barRef = useRef();
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setIsActive(true)
                else setIsActive(false)
            })
        })

        observer.observe(barRef.current)
    }, [])

    return (
        <div className="skill">
            <img src={ icon } alt={name} className="skill__icon" />

            <div className="skill__wrapper">
                <p className="skill__name">{ name }</p>

                <div 
                    className={`skill__bar skill__bar--${id} ${isActive && 'skill__bar--active'}`}
                    style={{ width: `${percentage}%`}}
                    data-skill={id}
                    ref={barRef}
                >
                    <p className="skill__percentage">{ percentage }%</p>
                </div>
            </div>
        </div>
    );
}
 
export default SkillBar;