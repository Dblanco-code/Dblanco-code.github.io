import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Zillow from '../assets/img/Zillow-Logo.png'
import Ford from '../assets/img/Ford-Logo.png'
import Monti from '../assets/img/Monti-Logo.png'
import Gaya from '../assets/img/Gaya-Logo.png'
import Cadabra from '../assets/img/BlackJack.webp'
import TinDev from '../assets/img/tindev.png'
import Introspect from '../assets/img/Introspect.png'
import 'animate.css';
import React from 'react';

class ProjectSkill extends React.PureComponent {
  render() {
    return <span className="project-skill">{this.props.skill}</span>;
  }
}

class ProjectSkills extends React.PureComponent {
  render() {
    return (
      <div className="project-skills">
        {this.props.skills.map((skill, index) => {
          return <ProjectSkill skill={skill} key={index} />;
        })}
      </div>
    );
  }
}

export const Experiences = () => {

  const projects = [
    {
      title: "Monti",
      description: "Chief Operating Officer and Cofounder<br /> <br />Monti a gamification platform aimed at improving the reading and writing skills of young children, I completed 50 user interviews to gather feedback. Currently, I am working with two schools in South Bend to execute a 100 student pilot using our MVP.",
      imgUrl: Monti,
      skills: ['Leadership', 'Product Development',]
    },
    {
      title: "Gaya",
      description: "Quality Assurance and Software Engineering Intern <br /><br />Developed and implemented automated workflows for insurance agents using JavaScript and RPA software, resulting in significant time and cost savings for the insurance companies Implemented automated testing for the company's website using Autify",
      imgUrl: Gaya,
      skills: ['JavaScript', 'UiPath', 'Autify', 'RPA', 'Axiom']
    },
    {
      title: "TinDev",
      description: "Built TinDev with Django and Tkinter for final project in Programming Paradigms",
      imgUrl: TinDev,
      skills: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: "Ford",
      description: "Software Development Intern<br /><br />Developed a React app that displays cyclomatic complexity and method length trends of any repository. <br />Led user interviews to gather feedback on how to further understand our target audience.<br /> Implemented features using Test Driven Development that allows for efficient user experience.",
      imgUrl: Ford,
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: "Zillow",
      description: "Incoming Software Development Engineering Intern for Summer 2023",
      imgUrl: Zillow,
      skills: ['Software Development'],
    },
    {
      title: "Cadabra",
      description: "Built a Blackjack Simulator in Python with a Help Feature that runs 100 simulations of the game if the user were to hit or stand, in order to provide the user the best statistical chance of winning ",
      imgUrl: Cadabra,
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: "Introspect",
      description: "During my SVS Study Aboard I worked on team to make Introspect as our Final Project for Tech Ethics.  ",
      imgUrl: Introspect,
      skills: ['HTML5', 'CSS3', 'JavaScript'],
  },
       
  ];

  return (
    <section className="experiences" id="experiences">
      <Container>
        <Row>
          <Col>
              <div >
                <h2>Work</h2>
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
                        <Col>
                        <p dangerouslySetInnerHTML={{ __html: projects[0].description }} />
                        <ProjectSkills skills={projects[0].id} {...projects[0]} />
                        </Col>
                      </Row>
                      <Row>
                        <ProjectCard key={projects[1].id} {...projects[1]} />
                        <Col>
                        <p dangerouslySetInnerHTML={{ __html: projects[1].description }} />
                        <ProjectSkills skills={projects[1].id} {...projects[1]} />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        <ProjectCard key={projects[4].id} {...projects[4]} />
                        <Col>
                        <p dangerouslySetInnerHTML={{ __html: projects[4].description }} />
                        <ProjectSkills skills={projects[4].id} {...projects[4]} />
                        </Col>
                      </Row>
                      <Row>
                      <ProjectCard key={projects[3].id} {...projects[3]} />
                        <Col>
                        <p dangerouslySetInnerHTML={{ __html: projects[3].description }} />
                        <ProjectSkills skills={projects[3].id} {...projects[3]} />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                      <ProjectCard key={projects[6].id} {...projects[6]} />
                        <Col>
                        <p dangerouslySetInnerHTML={{ __html: projects[6].description }} />
                        <ProjectSkills skills={projects[6].id} {...projects[6]} />
                        </Col>
                      </Row>
                      <Row>
                      <ProjectCard key={projects[5].id} {...projects[5]} />
                        <Col>
                        <p dangerouslySetInnerHTML={{ __html: projects[5].description }} />
                        <ProjectSkills skills={projects[5].id} {...projects[5]} />
                        </Col>
                      </Row>
                      <Row>
                      <ProjectCard key={projects[2].id} {...projects[2]} />
                        <Col>
                        <p dangerouslySetInnerHTML={{ __html: projects[2].description }} />
                        <ProjectSkills skills={projects[2].id} {...projects[2]} />
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