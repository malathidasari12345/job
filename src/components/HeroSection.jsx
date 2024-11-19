import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
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
            <h1 style={{fontSize:"4rem"}}>Find Your Dream Job With Us!</h1>
            <h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur cum adipisci eaque! 
            </h6>
            <br></br><br></br>
            <Form className="search-form p-3 mt-4 mb-5 bg-white rounded shadow-sm">
          <Row className="align-items-center">
            <Col xs={12} md={4} className="mb-2 mb-md-0">
              <InputGroup>
                <InputGroup.Text>
                  <FaSearch style={{ color: 'gray' }} />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Job Title" className="search-input" />
              </InputGroup>
            </Col>

            <Col xs={12} md={4} className="mb-2 mb-md-0">
              <InputGroup>
                <InputGroup.Text>
                  <FaMapMarkerAlt style={{ color: 'gray' }} />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Location" className="search-input" />
              </InputGroup>
            </Col>
            
            <Col xs={12} md={3} className="mb-2 mb-md-0">
              <Form.Select>
                <option>Select Categories</option>
                <option>Data Science</option>
                <option>Development</option>
                <option>Marketing</option>
                <option></option>
              </Form.Select>
            </Col>
            <Col xs={12} md={1} className="text-center">
              <Button className="search-button w-100">Search</Button>
            </Col>
          </Row>
        </Form>
          </Col>
        </Row>
<Row className="text-center mt-4">
  <Col md={4}>
    <div className="stat-box">
      <div className="card" style={{ backgroundColor: "white", color: "black", padding: "40px", borderRadius: "8px" }}>
        
        <center>
        <AiOutlineFundProjectionScreen size={50} style={{ marginBottom: "10px", color:"#23de4f" }} />
        </center>
        <h4>23+ <br /> Jobs Available</h4>
      </div>
    </div>
  </Col>
  <Col md={4}>
    <div className="stat-box">
      <div className="card" style={{ backgroundColor: "white", color: "black", padding: "50px", borderRadius: "8px" }}>
        <center>
        <MdBusinessCenter size={50} style={{ marginBottom: "10px" ,color:"#23de4f"}} />
        </center>
       
        <h4>6+ <br /> Companies</h4>
      </div>
    </div>
  </Col>
  <Col md={4}>
    <div className="stat-box">
      <div className="card" style={{ backgroundColor: "white", color: "black", padding: "40px", borderRadius: "8px" }}>
        <center>
        <BiUserCircle size={50} style={{ marginBottom: "10px",color:"#23de4f" }} />
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
