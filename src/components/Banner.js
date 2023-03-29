import { Container, Row, Col} from "react-bootstrap";
import { Book } from 'react-bootstrap-icons';
import Resume from '../assets/files/DominickBlancoResume_24.pdf'

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>      
        <Row>
          <Col size={12}>
            <div className="banner-box">
              <h1>Hi! I'm Dominick</h1>
                <p>I am a junior at the University of Notre Dame, majoring in CS with a minor in Latino Studies. 
                      I am interested in the intersectionally of technology and education to bridge the social inequities brought by the side-effects 
                        of technological advancements</p>
                <a href={Resume} without rel="noopener noreferrer" target="_blank">
                  <button trailingIcon="picture_as_pdf" label="Resume">
                  Resume<Book size={25}/>
                  </button>
                </a>
            </div>
          </Col>   
        </Row>   
      </Container>
    </section>
  )
}