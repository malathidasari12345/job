import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { MdBusinessCenter } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import "../styles/Hero.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <Container className="hero-content">
        <Row className="text-center">
          <Col>
            <h1><b>Find Your Dream Job! <br></br>With Brand Name</b></h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur cum adipisci eaque! 
            </p>
            <Form className="search-form">
              <InputGroup className="search-input-group" style={{ maxWidth: '400px', margin: '0 auto' }}>
                <Form.Control type="search" placeholder="Search here" className="search-input" />
                <Button  type="button" className="search-button">
                 Search
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
<Row className="text-center mt-4">
  <Col md={4}>
    <div className="stat-box">
      <div className="card" style={{ backgroundColor: "white", color: "black", padding: "20px", borderRadius: "8px" }}>
        
        <center>
        <AiOutlineFundProjectionScreen size={40} style={{ marginBottom: "10px", color:"#23de4f" }} />
        </center>
        <h4>23+ <br /> Jobs Available</h4>
      </div>
    </div>
  </Col>
  <Col md={4}>
    <div className="stat-box">
      <div className="card" style={{ backgroundColor: "white", color: "black", padding: "20px", borderRadius: "8px" }}>
        <center>
        <MdBusinessCenter size={40} style={{ marginBottom: "10px" ,color:"#23de4f"}} />
        </center>
       
        <h4>6+ <br /> Companies</h4>
      </div>
    </div>
  </Col>
  <Col md={4}>
    <div className="stat-box">
      <div className="card" style={{ backgroundColor: "white", color: "black", padding: "20px", borderRadius: "8px" }}>
        <center>
        <BiUserCircle size={40} style={{ marginBottom: "10px",color:"#23de4f" }} />
        </center>
        <h4>3+ <br /> Available Resumes</h4>
      </div>
    </div>
  </Col>
</Row>

       
      </Container>
    </div>
  );
};

export default HeroSection;
