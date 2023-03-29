import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Zillow from '../assets/img/Zillow-Logo.png'
import Ford from '../assets/img/Ford-Logo.png'
import Monti from '../assets/img/Monti-Logo.png'
import Gaya from '../assets/img/Gaya-Logo.png'
import Cadabra from '../assets/img/BlackJack.webp'
import TinDev from '../assets/img/tindev.png'
import 'animate.css';


export const Experiences = () => {

  const projects = [
    {
      title: "Monti",
      description: "Early-Stage Startup",
      imgUrl: Monti,
    },
    {
        title: "Gaya",
        description: "Early-Stage Startup",
        imgUrl: Gaya,
    },
    {
        title: "TinDev",
        description: "Project",
        imgUrl: TinDev,
    },
    {
      title: "Ford",
      description: "Big Tech",
      imgUrl: Ford,
    },
    {
        title: "Zillow",
        description: "Big Tech",
        imgUrl: Zillow,
    },
    {
        title: "Cadabra",
        description: "Project",
        imgUrl: Cadabra,
    },
       
  ];

  return (
    <section className="experiences" id="experiences">
      <Container>
        <Row>
          <Col size={12}>
              <div >
                <h2>Experiences</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Startups</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Big Tech</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        <ProjectCard key={projects[0].id} {...projects[0]} />
                        <p>Chief Operating Officer and Cofounder<br /> <br />Monti a gamification platform aimed at improving the reading and writing skills of young children, I completed 50 user interviews to gather feedback. Currently, I am working with two schools in South Bend to execute a 100 student pilot using our MVP.</p>
                      </Row>
                      <Row>
                        <ProjectCard key={projects[1].id} {...projects[1]} />
                        <p> Quality Assurance and Software Engineering Intern <br /><br />Developed and implemented automated workflows for insurance agents using JavaScript and RPA software, resulting in significant time and cost savings for the insurance companies
Implemented automated testing for the company's website using Autify
</p>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <ProjectCard key={projects[4].id} {...projects[4]} />
                        <p>Incoming Software Development Engineering Intern for Summer 2023</p>
                      </Row>
                      <Row>
                        <ProjectCard key={projects[3].id} {...projects[3]} />
                        <p>Software Development Intern<br /><br />Developed a React app that displays cyclomatic complexity and method length trends of any repository. <br />
                          Led user interviews to gather feedback on how to further understand our target audience.<br />
                          Implemented features using Test Driven Development that allows for efficient user experience.
                        </p>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        <ProjectCard key={projects[5].id} {...projects[5]} />
                        <p>Built a Blackjack Simulator in Python with a Help Feature that runs 100 simulations of the game if the user were to hit or stand, in order to provide the user the best statistical chance of winning </p>

                      </Row>
                      <Row>
                        <ProjectCard key={projects[2].id} {...projects[2]} />
                        <p>Built TinDev with Django and Tkinter for final project in Programming Paradigms</p>

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