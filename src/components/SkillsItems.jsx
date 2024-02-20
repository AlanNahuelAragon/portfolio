export const SkillsItems = ({ tech, logoUrl }) => {
    return (
        <div className="item">
            <img src={logoUrl} alt="skill" />
            <h5>{tech}</h5>
        </div>
    );
};