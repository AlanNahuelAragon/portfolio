
export const ExperienceCard = ({ company, position, description, imgUrl}) => {
  return (
    <div className="exp-card">
        <div className="exp-body">
            <div className="exp-title">
                <img src={imgUrl} />
                <h3>{company}</h3>
                <p className="exp-pos">{position}</p>
            </div>
            <p className="exp-desc">{description}</p>
        </div>
        
    </div>
  )
}