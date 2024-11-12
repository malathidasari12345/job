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
    </Container>
  );
};

export default Contact;
