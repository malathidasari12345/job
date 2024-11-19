import React from 'react'
import { Form, InputGroup, Row, Col, Card, Button } from 'react-bootstrap'
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.avif";
import "../styles/find.css"

const FindJob = () => {
  const jobData = [
    {
      id: 1,
      companyLogo: logo1,
      role: 'Software Engineer',
      location: 'Madhapur, Hyderabad',
      time: '2 days ago',
      salary: '$60,000 - $100,000',
      experience: '3+ years',
      description: 'Job opportunity for the role of Software Engineer at Tech Innovators Inc.',
    },
    {
      id: 2,
      companyLogo: logo2,
      role: 'Project Manager',
      location: 'Gachibowli, Hyderabad',
      time: '3 days ago',
      salary: '$50,000 - $80,000',
      experience: '3+ years',
      description: 'Job opportunity for the role of Project Manager at Green Earth Solutions.',
    },
    {
      id: 3,
      companyLogo: logo1,
      role: 'UI/UX Designer',
      location: 'Banjara Hills, Hyderabad',
      time: '4 days ago',
      salary: '$45,000 - $75,000',
      experience: '3+ years',
      description: 'Job opportunity for the role of UI/UX Designer at Creative Minds Studio.',
    },
    {
      id: 4,
      companyLogo: logo2,
      role: 'Data Analyst',
      location: 'Kukatpally, Hyderabad',
      time: '1 week ago',
      salary: '$60,000 - $100,000',
      experience: '3+ years',
      description: 'Job opportunity for the role of Data Analyst at Data Analytics Corp.',
    },
    {
      id: 5,
      companyLogo: logo1,
      role: 'Full-Stack Developer',
      location: 'Jubilee Hills, Hyderabad',
      time: '1 week ago',
      salary: '$60,000 - $95,000',
      experience: '3+ years',
      description: 'Job opportunity for the role of Full-Stack Developer at Rapid Dev Solutions.',
    },
    {
      id: 6,
      companyLogo: logo2,
      role: 'Digital Marketing Specialist',
      location: 'HiTech City, Hyderabad',
      time: '2 days ago',
      salary: '$45,000 - $75,000',
      experience: '3+ years',
      description: 'Job opportunity for the role of Digital Marketing Specialist at Bright Future Marketing.',
    }
  ];
  
  
  console.log(jobData);
  

  return (
    <>
      <div className="hero1 text-center mb-4">
        <h1>Find Your Dream Job</h1>
      </div>

      <div className="container1">
        <Row>
          <Col xs={12} md={4} className="mb-4">
            <h2>Search Filter</h2><br />
            <hr />
            <Form className="search-form p-3 mt-7 mb-5 bg-white rounded shadow-sm">
              <Row className="mb-4"> 
                <Col xs={12}>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaSearch style={{ color: 'gray' }} />
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="Job Title" className="search-input" />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaMapMarkerAlt style={{ color: 'gray' }} />
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="Location" className="search-input" />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <Form.Select>
                    <option>Select Categories</option>
                    <option>Data Science</option>
                    <option>Development</option>
                    <option>Marketing</option>
                  </Form.Select>
                </Col>
              </Row>
              <hr />
              <h2>Job Type</h2><br />
              <div className='check'>
                <input type="checkbox" /> Contract base<br /><br />
                <input type="checkbox" /> Freelance<br /><br />
                <input type="checkbox" /> Full Time<br /><br />
                <input type="checkbox" /> Internship<br /><br />
                <input type="checkbox" /> Part Time<br /><br />
              </div>

              <hr />
              <h2>Experience</h2><br />
              <div  className='check'>
                <input type="checkbox" /> Freshers<br /><br />
                <input type="checkbox" /> +1 Year<br /><br />
                <input type="checkbox" /> 3+ Years<br /><br />
              </div>
            </Form>
          </Col>


          {/* Job Listings Section */}
          <Col xs={12} md={8}>
            <div className="listed-jobs">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>We have found {jobData.length} Jobs</span>
                <Form.Select style={{ width: '150px' }}>
                  <option>Sort By</option>
                  <option>Ascending</option>
                  <option>Descending</option>
                </Form.Select>
              </div>
              <Row>
                {jobData.map((job) => (
                  <Col xs={12} md={4} key={job.id} className="mb-4">
                    <Card className="job-card">
                      <Card.Body>
                        <div className="d-flex justify-content-center">
                          <img src={job.companyLogo} alt="Company Logo" className="company-logo" height={80} width={80} />
                        </div>
                        <h5 className="ms-3 text-center">{job.role}</h5>
                        <p className="text-muted text-center">
                          <FaMapMarkerAlt className="me-2" />
                          {job.location}
                        </p>
                        <p><strong>Salary:</strong> {job.salary}</p>
                        <p><strong>Experience:</strong> {job.experience}</p>
                        <Link to={`/job-details/${job.id}`} style={{ textDecoration: "none" }}>
                          <Button variant="success" className="d-block mx-auto">Apply Now</Button>
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
}

export default FindJob;
