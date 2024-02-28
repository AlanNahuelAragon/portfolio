import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Alan-logo.png";
import navLinkedin from '../assets/img/socials/nav-linkedin.png';
import navGmail from '../assets/img/socials/nav-gmail.png';
import navGit from '../assets/img/socials/nav-git.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/developer-alan-aragon/"><img src={navLinkedin} alt="Linkedin" /></a>
              <a href="#" onClick={() => { window.open(`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`) }}><img src={navGmail} alt="Gmail" /></a>
              <a href="https://github.com/AlanNahuelAragon"><img src={navGit} alt="Github" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
