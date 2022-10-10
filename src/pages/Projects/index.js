import React from 'react';
import Card from 'react-bootstrap/Card';
import old from '../../assets/icons/old.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import project2 from '../../assets/projects/project2.jpg';
import project3 from '../../assets/projects/project3.jpeg';
import project4 from '../../assets/projects/project4.png';



function Projects() {

    const projectsArray = [
        {
            projectImage: old,
            projectLink: "www.google.com"
        },
        {
            projectImage: project2,
            projectLink: "www.bbcnews.com"
        },
        {
            projectImage: project3,
            projectLink: ""
        },
        {
            projectImage: project4,
            projectLink: ""
        },
    ]

    return (
        <Container fluid>
            <Row>
                

                    {projectsArray.map((project) => (
                        <Col sm={2}>
                    <a href={project.projectLink} className="projectCard"><Card className="bg-dark text-white ">
                        <Card.Img src={project.projectImage} alt="Card image" />
                        <Card.ImgOverlay>
                            {/* <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text> */}
                        </Card.ImgOverlay>
                    </Card></a>
            </Col>
                    
                    ))}
            </Row>
        </Container>

    );
}

export default Projects;