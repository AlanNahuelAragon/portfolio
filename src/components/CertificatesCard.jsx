import { Col } from "react-bootstrap";

export const CertificatesCard = ({ title, institute, imgUrl ,link}) => {
  return (
    <Col size={12} sm={6} md={6} lg={3}>
    <p>{institute}</p>
      <div className="cert-imgbx">
        <img src={imgUrl} />
        <a href={link} className="cert-link">
        <div className="cert-txtx">
          <h4>{title}</h4>
          <span>Click to open</span>
        </div>
        </a>
      </div>
    </Col>
  )
}