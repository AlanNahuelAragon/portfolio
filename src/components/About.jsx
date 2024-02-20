import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import { CertificatesCard } from "./CertificatesCard";
import { ExperienceCard } from "./ExperienceCard";
import projImg1 from "../assets/img/projects/project-img1.png";
import projImg2 from "../assets/img/projects/project-img2.png";
import projImg3 from "../assets/img/projects/project-img3.png";
import projDlfarm from "../assets/img/projects/project-dlfarmer.png";
import projGencer from "../assets/img/projects/project-gencer.png";
import projProte from "../assets/img/projects/project-protector.png";

import jscert from "../assets/img/certificates/jsmaster-cert.png"
import netcert from "../assets/img/certificates/dotnet-cert.png"
import gdcert from "../assets/img/certificates/gamedev-cert.png"

import bp4Logo from "../assets/img/experience/bp4-logo.png"
import acnLogo from "../assets/img/experience/acn-logo.png"
import celLogo from "../assets/img/experience/cel-logo.png"

import colorSharp2 from "../assets/img/color-sharp2.png";

import TrackVisibility from 'react-on-screen';



export const About = () => {
    const projects = [
        {
            title: "Duel Links Farmer",
            description: "Image recognition project",
            imgUrl: projDlfarm,
        },
        {
            title: "City Protector",
            description: "Unity game for Mobile",
            imgUrl: projProte,
        },
        {
            title: "Gencer",
            description: "Unity game for PC",
            imgUrl: projGencer,
        },
        {
            title: "Not available",
            description: "On development",
            imgUrl: projImg1,
        },
        {
            title: "Not available",
            description: "On development",
            imgUrl: projImg2,
        },
        {
            title: "Not available",
            description: "Coming soon",
            imgUrl: projImg3,
        },
    ]
    const experiece = [
      {
        company: "BP4",
        position: ".NET Dev.",
        description:"I participated in the development of different projects related to Omint 2000 (health insurance) website and intranet.",
        imgUrl: bp4Logo,
      },
      {
        company: "Accenture",
        position: "Sitecore Dev.",
        description:"Responsible for the maintenance and evolutionary development of various projects",
        imgUrl: acnLogo,
      },
      {
        company: "Celerative",
        position: "Unity Dev.",
        description:"I developed a sticker application for Coca-Cola using the Unity3D graphics engine with API integration.",
        imgUrl: celLogo,
      },
  ]
    const certificates = [
      {
          title: "Master in Javascript Frameworks",
          institute: "Udemy",
          imgUrl: jscert,
          link:"https://www.udemy.com/certificate/UC-4a2d4074-8804-4b62-8fd0-7491bc547e06/",
      },
      {
          title: ".NET Programing",
          institute: "UTN F.R.R",
          imgUrl: netcert,
          link:"https://drive.google.com/file/d/1ite64Imz8sOwyO8kNOLq1_0KscjKhQd3/view?usp=sharing",
      },
      {
          title: "Game Development",
          institute: "UTN B.A.",
          imgUrl: gdcert,
          link:"https://drive.google.com/file/d/1GNfUotP-sP_woDvrYTBGOFBfEpgYRc9N/view?usp=sharing",
      },
  ]
    return (
        <section className="about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About me</h2>
                <p>Full Stack Developer with 4 years of experience working for
                  Software Factories in the area of applications and web development.
                  My goal is to offer my knowledge, increase my seniority,
                  learn new languages and optimize my code day by day.
                </p>
                <Tab.Container id="about-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certifications</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Col>
                          {
                            experiece.map((experiece, index) => {
                              return (
                                <ExperienceCard
                                  key={index}
                                  {...experiece}
                                  />
                              )
                            })
                          }
                        </Col>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          certificates.map((certificates, index) => {
                            return (
                              <CertificatesCard
                                key={index}
                                {...certificates}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
    )
}