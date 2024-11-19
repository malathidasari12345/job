import React from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button } from 'react-bootstrap';
import '../styles/contact.css';

const Contact = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5 contact-header">Get in Touch with Us</h1>

      <Row>
        {/* Company Details Section */}
        <Col md={6} className="mb-4">
          <Card className="contact-card shadow-lg border-0">
            <Card.Body>
              <Card.Title className="contact-card-title">Company Information</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="contact-list-item">
                  <strong>Email:</strong> support@company.com
                </ListGroup.Item>
                <ListGroup.Item className="contact-list-item">
                  <strong>Phone:</strong> +1 (123) 456-7890
                </ListGroup.Item>
                <ListGroup.Item className="contact-list-item">
                  <strong>Location:</strong> 123 Business Street, City, Country
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Form Section */}
        <Col md={6} className="mb-4">
          <Card className="contact-card shadow-lg border-0">
            <Card.Body>
              <Card.Title className="contact-card-title">Send Us a Message</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="contact-form-label">Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="contact-form-label">Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="contact-form-label">Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Write your message" required />
                </Form.Group>

                <Button variant="primary" type="submit" className="contact-submit-btn">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Map Section */}
      <Row className="mt-5">
        <Col>
        <div className="map-container">
                {/* Embed Google Maps */}
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.2161178996294!2d78.55089597376916!3d17.35333060378813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99005a6b6089%3A0x78a0bd01ec6960f2!2sTechno%20Tide%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1731913539725!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
