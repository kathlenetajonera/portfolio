const WorkCard = ({ company, date, companyLogo, tasks }) => {
    return (
        <div className="work">
            <div className="work__details">
                <div className="work__wrapper">
                    <div className="work__company">
                        <p className="work__company-name">
                            {company}
                        </p>
                        <p className="work__date">
                            {date}
                        </p>
                    </div>

                    <img src={companyLogo} alt={company} className="work__company-logo"/>
                </div>

                <ul className="work__tasks">
                    { tasks.map((task, index) => (
                        <li className="work__task" key={index}>{task}</li>
                    )) }
                </ul>
            </div>
        </div>
    );
}
 
export default WorkCard;