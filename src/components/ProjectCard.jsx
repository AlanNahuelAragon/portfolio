import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,gitUrl,projUrl }) => {
  return (
    <Col size={12} sm={6} md={6} lg={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-links">
            {gitUrl?<a className="proj-btn" href={gitUrl}>Open git repo</a> :''}
            {projUrl?<a className="proj-btn" href={projUrl}>Open project</a> :''}     
          </div>
          
        </div>
      </div>
    </Col>
  )
}