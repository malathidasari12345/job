import React, { useState } from 'react';
import { Form, InputGroup, Row, Col, Card, Button } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.avif";
import "../styles/find.css";

const FindJob = () => {
  const jobData = [
    {
      id: 1,
      companyLogo: logo1,
      role: 'Software Engineer',
      location: 'Madhapur, Hyderabad',
      time: '2 days ago',
      salary: '$60,000 - $100,000',
      experience: 'Freshers',
      category: 'Development',
      description: 'Job opportunity for the role of Software Engineer at Tech Innovators Inc.',
      jobType: 'Full Time',
    },
    {
      id: 2,
      companyLogo: logo2,
      role: 'Project Manager',
      location: 'Gachibowli, Hyderabad',
      time: '3 days ago',
      salary: '$50,000 - $80,000',
      experience: '3+ years',
      category: 'Development',
      description: 'Job opportunity for the role of Project Manager at Green Earth Solutions.',
      jobType: 'Full Time',
    },
    {
      id: 3,
      companyLogo: logo1,
      role: 'UI/UX Designer',
      location: 'Banjara Hills, Hyderabad',
      time: '4 days ago',
      salary: '$45,000 - $75,000',
      experience: '+1 year',
      category: 'Development',
      description: 'Job opportunity for the role of UI/UX Designer at Creative Minds Studio.',
      jobType: 'Freelance',
    },
    {
      id: 4,
      companyLogo: logo2,
      role: 'Data Analyst',
      location: 'Kukatpally, Hyderabad',
      time: '1 week ago',
      salary: '$60,000 - $100,000',
      experience: '3+ years',
      category: 'Data Science',
      description: 'Job opportunity for the role of Data Analyst at Data Analytics Corp.',
      jobType: 'Contract base',
    },
    {
      id: 5,
      companyLogo: logo1,
      role: 'Full-Stack Developer',
      location: 'Jubilee Hills, Hyderabad',
      time: '1 week ago',
      salary: '$60,000 - $95,000',
      experience: '3+ years',
      category: 'Development',
      description: 'Job opportunity for the role of Full-Stack Developer at Rapid Dev Solutions.',
      jobType: 'Full Time',
    },
    {
      id: 6,
      companyLogo: logo2,
      role: 'Digital Marketing Specialist',
      location: 'HiTech City, Hyderabad',
      time: '2 days ago',
      salary: '$45,000 - $75,000',
      experience: '+1 year',
      category: 'Marketing',
      description: 'Job opportunity for the role of Digital Marketing Specialist at Bright Future Marketing.',
      jobType: 'Part Time',
    }
  ];

  // State for filter criteria
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [jobType, setJobType] = useState([]);
  const [experience, setExperience] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const sortJobs = (jobs) => {
    if (sortOrder === 'Ascending') {
      // Sort jobs by role in ascending alphabetical order
      return [...jobs].sort((a, b) => a.role.localeCompare(b.role));
    } else if (sortOrder === 'Descending') {
      // Sort jobs by role in descending alphabetical order
      return [...jobs].sort((a, b) => b.role.localeCompare(a.role));
    }
    // If no sorting is selected, return the original list
    return jobs;
  };
  const sortedJobs = sortJobs(jobData)

  // Function to filter jobs based on criteria
  const filteredJobs = sortedJobs.filter((job) => {
    // Filter by job title (case-insensitive)
    const matchesTitle = job.role.toLowerCase().includes(jobTitle.toLowerCase());
    
    // Filter by location (case-insensitive)
    const matchesLocation = job.location.toLowerCase().includes(location.toLowerCase());

    // Filter by category if selected
    const matchesCategory = category ? job.category === category : true;

    // Filter by job type if selected
    const matchesJobType = jobType.length > 0 ? jobType.includes(job.jobType) : true;

    // Filter by experience if selected
    const matchesExperience = experience.length > 0 ? experience.includes(job.experience) : true;

    return matchesTitle && matchesLocation && matchesCategory && matchesJobType && matchesExperience;
  });

  // Handling checkbox changes for job type and experience
  const handleCheckboxChange = (e, setState) => {
    const { value, checked } = e.target;
    setState((prev) => checked ? [...prev, value] : prev.filter((item) => item !== value));
  };
  


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
                    <Form.Control
                      type="text"
                      placeholder="Job Title"
                      className="search-input"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaMapMarkerAlt style={{ color: 'gray' }} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Location"
                      className="search-input"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <Form.Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select Categories</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Development">Development</option>
                    <option value="Marketing">Marketing</option>
                  </Form.Select>
                </Col>
              </Row>
              <hr />
              <h2>Job Type</h2><br />
              <div className='check'>
                {['Contract base', 'Freelance', 'Full Time', 'Internship', 'Part Time'].map((type) => (
                  <div key={type}>
                    <input
                      type="checkbox"
                      value={type}
                      checked={jobType.includes(type)}
                      onChange={(e) => handleCheckboxChange(e, setJobType)}
                    /> {type}<br /><br />
                  </div>
                ))}
              </div>

              <hr />
              <h2>Experience</h2><br />
              <div className='check'>
                {['Freshers', '+1 year', '3+ years'].map((exp) => (
                  <div key={exp}>
                    <input
                      type="checkbox"
                      value={exp}
                      checked={experience.includes(exp)}
                      onChange={(e) => handleCheckboxChange(e, setExperience)}
                    /> {exp}<br /><br />
                  </div>
                ))}
              </div>
            </Form>
          </Col>

          {/* Job Listings Section */}
          <Col xs={12} md={8}>
            <div className="listed-jobs">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>We have found <b style={{color:"#28a745"}}>{filteredJobs.length}</b> Jobs</span>
                <Form.Select style={{ width: '150px' }}
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option>Sort By</option>
                  <option>Ascending</option>
                  <option>Descending</option>
                </Form.Select>
              </div>
              <Row>
              {filteredJobs.map((job) => (
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
};

export default FindJob;
