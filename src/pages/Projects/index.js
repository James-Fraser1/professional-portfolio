import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tilt from 'react-parallax-tilt';
import passgen from '../../assets/projects/passgen.png';
import ecommerce from '../../assets/projects/ecommerce.png';
import socialapi from '../../assets/projects/socialapi.png';
import teamprofilegen from '../../assets/projects/teamprofilegen.png';
import leashleague from '../../assets/projects/leashleague.png';
import rvahotspot from '../../assets/projects/rvahotspot.png';


function Projects() {

    const projectsArray = [
        {
            projectImage: passgen,
            projectLink: "https://github.com/James-Fraser1/password-generator"
        },
        {
            projectImage: ecommerce,
            projectLink: "https://github.com/James-Fraser1/E-Commerce-BackEnd"
        },
        {
            projectImage: socialapi,
            projectLink: "https://github.com/James-Fraser1/Social-Network-API"
        },
        {
            projectImage: teamprofilegen,
            projectLink: "https://github.com/James-Fraser1/Team-Profile-Generator"
        },
        {
            projectImage: leashleague,
            projectLink: "https://warm-plateau-73527.herokuapp.com/"
        },
        {
            projectImage: rvahotspot,
            projectLink: "https://rockwoodc.github.io/RVA-Hotspot/"
        },
    ]

    return (
        <Container fluid>
            <Row>
                {projectsArray.map((project) => (
                    <Col md={{ span: 3, offset: 2 }}>
                        <Tilt>
                            <a href={project.projectLink} className="projectCard"><Card className="bg-dark text-black cardcss">
                                <Card.Img src={project.projectImage} alt="Card image" />
                                <Card.ImgOverlay>
                                </Card.ImgOverlay>
                            </Card></a>
                        </Tilt>
                    </Col>

                ))}
            </Row>
        </Container>
    );
}

export default Projects;