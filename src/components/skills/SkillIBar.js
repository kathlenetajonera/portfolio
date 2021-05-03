const SkillBar = ({ name, icon, percentage, id }) => {

    return (
        <div className="skill">
            <img src={ icon } alt={name} className="skill__icon" />

            <div className="skill__wrapper">
                <p className="skill__name">{ name }</p>

                <div 
                    className={`skill__bar skill__bar--${id}`}
                    style={{ width: `${percentage}%`}}
                >
                    <p className="skill__percentage">{ percentage }%</p>
                </div>
            </div>
        </div>
    );
}
 
export default SkillBar;