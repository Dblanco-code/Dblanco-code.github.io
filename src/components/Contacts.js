import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/portrait.jpg";
import 'animate.css';
export const Contacts = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <h2>Contact Me</h2>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          
            <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
            <h2>dblanco@nd.edu</h2>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}