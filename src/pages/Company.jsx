import React from 'react';
import { Form, InputGroup, Row, Col, Card, Button } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.avif";
import "../styles/find.css";

const Company = () => {
  const companyData = [
    {
      id: 1,
      companyLogo: logo1,
      name: 'Tech Innovators Inc.',
      location: 'Madhapur, Hyderabad',
      industry: 'Technology',
      size: '500-1000 Employees',
      revenue: '$10M - $20M',
      description: 'A leading tech company specializing in AI and cloud solutions. Focused on innovation and cutting-edge technology.',
      jobs: [
        {
          id: 1,
          title: 'Software Engineer',
          salary: '$60,000 - $100,000',
          posted: '2 days ago',
        }
      ],
    },
    {
      id: 2,
      companyLogo: logo2,
      name: 'Green Earth Solutions',
      location: 'Gachibowli, Hyderabad',
      industry: 'Environmental Technology',
      size: '200-500 Employees',
      revenue: '$5M - $15M',
      description: 'Pioneering sustainable technology with eco-friendly solutions and a strong commitment to the environment.',
      jobs: [
        {
          id: 2,
          title: 'Project Manager',
          salary: '$50,000 - $80,000',
          posted: '3 days ago',
        }
      ],
    },
    {
      id: 3,
      companyLogo: logo1,
      name: 'Creative Minds Studio',
      location: 'Banjara Hills, Hyderabad',
      industry: 'Design & Development',
      size: '50-200 Employees',
      revenue: '$2M - $8M',
      description: 'A digital agency that specializes in UI/UX design, branding, and web development for clients globally.',
      jobs: [
        {
          id: 3,
          title: 'UI/UX Designer',
          salary: '$45,000 - $75,000',
          posted: '4 days ago',
        },
      ],
    },
    {
      id: 4,
      companyLogo: logo2,
      name: 'Data Analytics Corp.',
      location: 'Kukatpally, Hyderabad',
      industry: 'Data Analytics',
      size: '1000+ Employees',
      revenue: '$20M - $50M',
      description: 'Experts in big data analytics, providing insights and solutions to Fortune 500 companies.',
      jobs: [
        {
          id: 4,
          title: 'Data Analyst',
          salary: '$60,000 - $100,000',
          posted: '1 week ago',
        },
    
      ],
    },
    {
      id: 5,
      companyLogo: logo1,
      name: 'Rapid Dev Solutions',
      location: 'Jubilee Hills, Hyderabad',
      industry: 'Software Development',
      size: '10-50 Employees',
      revenue: '$1M - $5M',
      description: 'An agile software development company that delivers scalable and responsive web applications.',
      jobs: [
        {
          id: 5,
          title: 'Full-Stack Developer',
          salary: '$60,000 - $95,000',
          posted: '1 week ago',
        }
      ],
    },
    {
      id: 6,
      companyLogo: logo2,
      name: 'Bright Future Marketing',
      location: 'HiTech City, Hyderabad',
      industry: 'Marketing',
      size: '500-800 Employees',
      revenue: '$15M - $25M',
      description: 'A marketing agency focusing on digital campaigns, SEO, and brand management for startups and established businesses.',
      jobs: [
        {
          id: 6,
          title: 'Digital Marketing Specialist',
          salary: '$45,000 - $75,000',
          posted: '2 days ago',
        },
      ],
    },
  ];
  

  return (
    <>
      <div className="hero1 text-center mb-4">
        <h1>All Companies</h1>
      </div>

      <div className="container1">
        <Row>
          <Col xs={12} md={4} className="mb-4">
            <h2>Search Filter</h2>
            <hr />
            <Form className="search-form p-3 mt-7 mb-5 bg-white rounded shadow-sm">
              <Row className="mb-4">
                <Col xs={12}>
                  <InputGroup>
                    <Form.Control type="text" placeholder="Company Name" className="search-input" style={{padding:"15px"}}/>
                  </InputGroup>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <Form.Select className='text-muted' style={{padding:"15px"}}>
                    <option>Select Industry</option>
                    <option>Technology</option>
                    <option>Sustainability</option>
                    <option>Design</option>
                    <option>Analytics</option>
                    <option>Marketing</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <Form.Select className='text-muted' style={{padding:"15px"}}>
                    <option>Company Size</option>
                    <option>1-10</option>
                    <option>10-50</option>
                    <option>50-200</option>
                    <option>200-500</option>
                    <option>500+</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <Form.Select className='text-muted' style={{padding:"15px"}}>
                    <option>Revenue Range</option>
                    <option>0 - $1M</option>
                    <option>$1M - $5M</option>
                    <option>$5M - $10M</option>
                    <option>$10M - $20M</option>
                    <option>$20M+</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form>
          </Col>

          {/* Company Listings Section */}
          <Col xs={12} md={8}>
            <div className="listed-companies">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>We have found <b style={{color:"#28a745"}}>{companyData.length}</b> Companies</span>
                <Button variant="primary">
                  Add Your Company
                </Button>
              </div>
              <Row>
                {companyData.map((company) => (
                  <Col xs={12} md={4} key={company.id} className="mb-4">
                    <Card className="company-card">
                      <Card.Body>
                        <div className="d-flex justify-content-center">
                          <img src={company.companyLogo} alt="Company Logo" className="company-logo" height={80} width={80} />
                        </div>
                        <h5 className="ms-3 text-center">{company.name}</h5>
                        <p className="text-muted text-center">
                          <FaMapMarkerAlt className="me-2" />
                          {company.location}
                        </p>
                        <p><strong>Size:</strong> {company.size}</p>
                        <Link to={`/company-details/${company.id}`} style={{ textDecoration: "none" }}>
                          <Button variant="success" className="d-block mx-auto">See Details</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Company;
