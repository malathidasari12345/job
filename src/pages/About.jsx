import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import team from "../images/job background.jpg"; 

const About = () => {
  return (
    <Container className="my-5">
      {/* About Company Section */}
      <section className="mb-5">
        <h1>About Us</h1>
        <p>
          We are a dynamic and innovative company focused on delivering high-quality services
          and solutions to our clients. Our team works diligently to create outstanding
          products that exceed expectations and drive success. We believe in fostering a
          collaborative and creative environment that empowers each team member to contribute
          their best work.
        </p>
      </section>

      {/* About Team Section */}
      <section>
        <h2>Meet Our Team</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {/* Team Member 1 */}
          <Col>
            <Card>
              <Card.Img variant="top" src={team} />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CEO & Founder</Card.Subtitle>
                <Card.Text>
                  John is a visionary leader with a passion for technology and innovation. With years
                  of experience in the industry, he leads the company with a focus on delivering excellence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Team Member 2 */}
          <Col>
            <Card>
              <Card.Img variant="top" src={team} />
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Chief Marketing Officer</Card.Subtitle>
                <Card.Text>
                  Jane brings a wealth of experience in digital marketing, driving strategies that help
                  the company grow its brand and reach new audiences.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Team Member 3 */}
          <Col>
            <Card>
              <Card.Img variant="top" src={team} />
              <Card.Body>
                <Card.Title>Sam Wilson</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Lead Developer</Card.Subtitle>
                <Card.Text>
                  Sam is an expert in full-stack development and leads our technical team in building
                  cutting-edge solutions to meet our clients' needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default About;
