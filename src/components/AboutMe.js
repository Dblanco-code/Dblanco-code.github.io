import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import SF from '../assets/img/sfbridge.jpg'
import Colorstack from '../assets/img/Colorstack.jpeg'
import Laptop from '../assets/img/laptop.jpg'
import Hayes from '../assets/img/hayes.jpeg'
import MeinNYC from '../assets/img/meInNyc.gif'
import GoldenDome from '../assets/img/GoldenDome.jpg'
import 'animate.css';


export const AboutMe = () => {

  const projects = [
    {
      imgUrl: MeinNYC,
      description: "Born and raised in the Bronx!<br /> <br /> Afro-Latino 🇩🇴<br /> <br /> I enjoy playing League of Legends", 
    },
    {
      imgUrl: GoldenDome,
      description: "Current junior majoring in CS with a minor in Latino Studies<br /><br /> Class of 24' <br /><br /> I live in Alumni Hall! <br /> <br /> Clubs: President of SHPE, Board of NSBE, Wabruda Black Men Club of ND, LSA, BSA "
    },
    {
      imgUrl: Hayes,
      description: "Attended Cardinal Hayes High School from 2016 - 2020 <br /><br /> TriLatino Triathlon Club President<br /><br /> NHS President"
    },
    {
      imgUrl: Colorstack,
      description: "Cohorts: Colorstack, Takeoff Institute C'23, MLT CP'24 <br /><br /> Certificates: Codepath Summer 2022 Intermediate "
    },
    {
      imgUrl: SF,
      description: "Currently Studying Abroad In Silicon Valley!<br /><br /> Im living in the Palo Alto area and work Part-time at Gaya and take classes. <br /> <br /> Classes: Operating Systems, Tech Ethics, Computer Security"
    },
    {
      imgUrl: Laptop,
      description: "Python: 🌕🌕🌕🌕🌑 <br /><br /> C++: 🌕🌕🌕🌗🌑 <br /><br /> HTML/CSS/JS: 🌕🌕🌕🌕🌑 <br /><br /> Leadership: 🌕🌕🌕🌕🌑 <br /><br />"
    },
       
  ];

  return (
    <section className="experiences" id="aboutme">
      <Container>
        <Row>
          <Col size={12}>
              <div >
                <h2>About Me</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Skils</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Personal</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        <ProjectCard key={projects[4].id} {...projects[4]} />
                        <Col>
                          <p dangerouslySetInnerHTML={{ __html: projects[4].description }} />
                        </Col>
                      </Row>
                      <Row>
                        <ProjectCard key={projects[1].id} {...projects[1]} />
                        <Col>
                          <p dangerouslySetInnerHTML={{ __html: projects[1].description }} />
                        </Col>
                      </Row>
                      <Row>
                        <ProjectCard key={projects[2].id} {...projects[2]} />
                        <Col>
                          <p dangerouslySetInnerHTML={{ __html: projects[2].description }} />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        <ProjectCard key={projects[5].id} {...projects[5]} />
                        <Col>
                          <p dangerouslySetInnerHTML={{ __html: projects[5].description }} />
                        </Col>
                      </Row>
                      <Row>
                        <ProjectCard key={projects[3].id} {...projects[3]} />
                        <Col>
                          <p dangerouslySetInnerHTML={{ __html: projects[3].description }} />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        <ProjectCard key={projects[0].id} {...projects[0]} />
                        <Col>
                          <p dangerouslySetInnerHTML={{ __html: projects[0].description }} />
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}