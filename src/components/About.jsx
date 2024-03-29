import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import { CertificatesCard } from "./CertificatesCard";
import { ExperienceCard } from "./ExperienceCard";
import projImg1 from "../assets/img/projects/project-img1.png";
//import projImg2 from "../assets/img/projects/project-img2.png";
//import projImg3 from "../assets/img/projects/project-img3.png";
import projDlfarm from "../assets/img/projects/project-dlfarmer.png";
import projGencer from "../assets/img/projects/project-gencer.png";
import projProte from "../assets/img/projects/project-protector.png";
import projWeather from "../assets/img/projects/project-weather.png"
import projBoxing from "../assets/img/projects/project-boxing.png"
import projPokedex from "../assets/img/projects/project-pokedex.png"

import jsmcert from "../assets/img/certificates/jsmaster-cert.png"
import netcert from "../assets/img/certificates/dotnet-cert.png"
import gdcert from "../assets/img/certificates/gamedev-cert.png"
import jscert from "../assets/img/certificates/javascript-cert.png"

import bp4Logo from "../assets/img/experience/bp4-logo.png"
import acnLogo from "../assets/img/experience/acn-logo.png"
import celLogo from "../assets/img/experience/cel-logo.png"

import colorSharp2 from "../assets/img/color-sharp2.png";

import TrackVisibility from 'react-on-screen';



export const About = () => {
  const projects = [
    {
      title: "Pokedex",
      description: "Responsive pokedex for browser",
      imgUrl: projPokedex,
      gitUrl: "https://github.com/AlanNahuelAragon/pokedex",
      projUrl: "https://alannahuelaragon.github.io/pokedex/"
    },
    {
      title: "Boxing-Js",
      description: "A browser game made with javascript",
      imgUrl: projBoxing,
      gitUrl: "https://github.com/AlanNahuelAragon/boxing-js",
      projUrl: "https://alannahuelaragon.github.io/boxing-js"
    },
    {
      title: "Weather Widget",
      description: "Weather with API integration",
      imgUrl: projWeather,
      gitUrl: "https://github.com/AlanNahuelAragon/weather-widget",
      projUrl: "https://alannahuelaragon.github.io/weather-widget"
    },
    {
      title: "Duel Links Farmer",
      description: "Image recognition project",
      imgUrl: projDlfarm,
      gitUrl: "https://github.com/AlanNahuelAragon/DLBot",
      projUrl: ""
    },
    {
      title: "City Protector",
      description: "Unity game for Mobile",
      imgUrl: projProte,
      gitUrl: "",
      projUrl: "https://voidseye.itch.io/city-protector"
    },
    {
      title: "Gencer",
      description: "PC game made with Unity at Global Game Jam event",
      imgUrl: projGencer,
      gitUrl: "",
      projUrl: ""
    },
    {
      title: "Not available",
      description: "On development",
      imgUrl: projImg1,
      gitUrl: "",
      projUrl: ""
    }
  ]
  const experiece = [
    {
      company: "BP4",
      position: ".NET Dev.",
      description: "I participated in the development of different projects related to Omint 2000 (health insurance) website and intranet.",
      imgUrl: bp4Logo,
    },
    {
      company: "Accenture",
      position: "Sitecore Dev.",
      description: "Responsible for the maintenance and evolutionary development of various projects",
      imgUrl: acnLogo,
    },
    {
      company: "Celerative",
      position: "Unity Dev.",
      description: "I developed a sticker application for Coca-Cola using the Unity3D graphics engine with API integration.",
      imgUrl: celLogo,
    },
  ]
  const certificates = [
    {
      title: "Javascript Essential",
      institute: "LinkedIn",
      imgUrl: jscert,
      link: "https://www.linkedin.com/learning/certificates/8e26a58b817f915a750be7c13f551edd8c37dfa7f8fa8970c0fd25a66782144f?trk=share_certificate",
    },
    {
      title: "Master in Javascript Frameworks",
      institute: "Udemy",
      imgUrl: jsmcert,
      link: "https://www.udemy.com/certificate/UC-4a2d4074-8804-4b62-8fd0-7491bc547e06/",
    },
    {
      title: ".NET Programing",
      institute: "UTN F.R.R",
      imgUrl: netcert,
      link: "https://drive.google.com/file/d/1ite64Imz8sOwyO8kNOLq1_0KscjKhQd3/view?usp=sharing",
    },
    {
      title: "Game Development",
      institute: "UTN B.A.",
      imgUrl: gdcert,
      link: "https://drive.google.com/file/d/1GNfUotP-sP_woDvrYTBGOFBfEpgYRc9N/view?usp=sharing",
    },
  ] 
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
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