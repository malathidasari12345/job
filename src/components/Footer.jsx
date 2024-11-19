import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer bg-dark text-white py-6">
      <Container>
        <Row className="text-center text-md-start"> 
          <Col xs={12} md={3} className="mb-4">
            <h3>About Company</h3>
            <p>
              JobConnect is a platform that connects job seekers with employers.
            </p>
            <p>
              <FaMapMarkerAlt className="me-2 icon" /> L.B Nagar, Hyderabad, 531075
            </p>
            <p>
              <FaPhoneAlt className="me-2 icon" /> 9346323463
            </p>
            <p>
              <FaEnvelope className="me-2 icon" /> helpline@gmail.com
            </p>
          </Col>

          <Col xs={12} md={3} className="mb-4">
            <h3>For Candidates</h3>
            <p>Browse Jobs</p>
            <p>Browse Category</p>
            <p>Candidate Dashboard</p>
            <p>Job Alert</p>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <h3>For Employers</h3>
            <p>Browse Candidates</p>
            <p>Browse Category</p>
            <p>Employer Dashboard</p>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <h3>Quick Links</h3>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>FAQ</p>
          </Col>
        </Row>
        <hr />
        <Row className="text-center">
          <Col>
            &copy; 2024 TTT All rights reserved.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
