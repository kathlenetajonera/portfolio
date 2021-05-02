const SkillItem = ({ title, icon, percentage, id }) => {

    return (
        <div className="skill">
            <img src={ icon } alt={title} className="skill__icon" />

            <div className="skill__wrapper">
                <p className="skill__title">{ title }</p>

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
 
export default SkillItem;