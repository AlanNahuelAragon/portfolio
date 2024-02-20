import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import meter1 from "../assets/img/meter1.svg"
import colorSharp from "../assets/img/color-Sharp.png"
import {SkillsItems} from "./SkillsItems"

import reactLogo from "../assets/img/skills/React-logo.png"
import nodejsLogo from "../assets/img/skills/Nodejs-logo.png"
import cssLogo from "../assets/img/skills/Css-logo.png"
import sqlLogo from "../assets/img/skills/Sql-logo.png"
import htmlLogo from "../assets/img/skills/Html-logo.png"
import unity3dLogo from "../assets/img/skills/Unity3d-logo.png"
import blenderLogo from "../assets/img/skills/Blender-logo.png"
import gitLogo from "../assets/img/skills/Git-logo.png"
import javascriptLogo from "../assets/img/skills/Javascript-logo.png"
import csharpLogo from "../assets/img/skills/Csharp-logo.png"
import pythonLogo from "../assets/img/skills/Python-logo.png"

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const skills = [
        {
            tech:"React",
            logoUrl:reactLogo,
        },
        {
            tech:"NodeJs",
            logoUrl:nodejsLogo,
        },
        {
            tech:"Css",
            logoUrl:cssLogo,
        },
        {
            tech:"SQL",
            logoUrl:sqlLogo,
        },
        {
            tech:"HTML",
            logoUrl:htmlLogo,
        },
        {
            tech:"Unity3D",
            logoUrl:unity3dLogo,
        },
        {
            tech:"Blender",
            logoUrl:blenderLogo,
        },
        {
            tech:"Git",
            logoUrl:gitLogo,
        },
        {
            tech:"Javascript",
            logoUrl:javascriptLogo,
        },
        {
            tech:"C#",
            logoUrl:csharpLogo,
        },
        {
            tech:"Python",
            logoUrl:pythonLogo,
        },
    ]
    return (
        <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>
                        Skills
                    </h2>
                    <p>Throughout my career as a programmer, I have learned many languages and technologies that I am comfortable with. Apart from programming, I have valuable skills with graphics engines in 2D and 3D environments.</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        {
                            skills.map((skill, index) => {
                                return (
                                <SkillsItems
                                    key={index}
                                    {...skill}
                                    />
                                )
                            })
                        }
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} />
        </section>
    );
}