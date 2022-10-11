import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import old from '../../assets/icons/old.jpeg';
import ecommvid from '../../assets/projects/ecommvid.mp4';
import ReactPlayer from 'react-player';

function About() {
    return (
        <Container>
            <Row>
                <Col md={4} className="headerText" ><h1>Hi, I'm James Fraser</h1></Col>
            </Row>
            <Row>
                <Col md={4}>
                    <img src={old} alt="Icon" className="headerIcon"></img>
                </Col>
                <Col md={{ span: 4 }}>
                    {`I am a recent graduate from the Virginia Military Institute.
                    During those four years, I strived to positively impact the three pillars of the Institute (Academics, Military, and Athletics) on a fundamental level.
                    Throughout my short military career, I led 40+ young men and women for two years through various high stakes scenarios during training excursions to real Army Camps.
                    I was the first walk on addition to the VMI D1 Swim Team in half a decade, where I rose through the ranks as one of the top butterfly swimmers.
                    While performing to my utmost in both the athletic and militaristic side, I also was pursuing a B.A. in Civil Engineering.
                    Finding a way to balance military duties, athletic expectations, and my personal education required a lot of hardwork and discipline.
                    Over the course of my time at the Institute, balancing these three pillars helped me learn the meaning of sacrifice, determination, and effort.
                     `}
                </Col>
                <Col md={{ span: 4 }}>
                    {`Skills: React, CSS5, HTML3, JavaScript, SQL `}
                </Col>
                <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= {ecommvid}
            width='20%'
            height='20%'
            controls = {true}

            />
        </div>
            </Row>
        </Container>
    );
}

export default About;