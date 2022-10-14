import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutme from '../../assets/icons/aboutme.jpg';
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function About() {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <img src={aboutme} alt="Icon" className="headerIcon"></img>
                </Col>
                <Col md={{ span: 8 }}>
                    {<p className='abouttxt'>I am a recent graduate from the Virginia Military Institute.
                    During those four years, I strived to positively impact the three pillars of the Institute (Academics, Military, and Athletics) on a fundamental level.
                    Throughout my short military career, I led 40+ young men and women for two years through various high stakes scenarios during training excursions to real Army Camps.
                    I was the first walk on addition to the VMI D1 Swim Team in half a decade, where I rose through the ranks as one of the top butterfly swimmers.
                    While performing to my utmost in both the athletic and militaristic side, I also was pursuing a B.A. in Civil Engineering.
                    Finding a way to balance military duties, athletic expectations, and my personal education required a lot of hardwork and discipline.
                    Over the course of my time at the Institute, balancing these three pillars helped me learn the meaning of sacrifice, determination, and effort.
                     </p>}
                </Col>
            </Row>
            <br/>
            <Col md={{ span: 6, offset: 7 }}>
                    {<p className='skillstxt'>Skills</p>}
                </Col>
            <Col md={{ span: 6, offset: 6 }}>
                    {<p className='skillsicon'><FaReact style={{ color: '#61dbfb' }}/> <FaNodeJs style={{ color: '#68a063' }}/> <SiMongodb style={{ color: '#4DB33D' }}/> <DiJavascript  style={{ color: '#f0db4f' }}/> <SiMysql style={{ color: '#00758F' }}/></p>}
                </Col>
        </Container>
    );
}

export default About;