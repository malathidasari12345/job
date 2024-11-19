import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.avif";
import "../styles/listedJobs.css";
import { FaMapMarkerAlt } from 'react-icons/fa';
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
  }
];



const ListedJobs = () => {
  return (
    <div className="listed-jobs">
      <center>
      <h6 style={{color: "#28a745", fontWeight: "bold", fontStyle: "italic", borderBottom: "none"}}>Recent Job</h6>
      </center>
      <h1 className='section-title'>Popular Listed Jobs</h1>
      <div className="job-cards">
        {jobData.map((job) => (
          <Card key={job.id} className="job-card">
             <div className="green-dot"></div>
            <Card.Body>
            <div className="d-flex align-items-center justify-content-center">
               <img src={job.companyLogo} alt="Company Logo" className="company-logo" height={100} width={100} />
              </div>
              <center>
              <h5 className="ms-3">{job.role}</h5>
              <p className="text-muted">
                  <FaMapMarkerAlt className="me-2" />
                  {job.location}
                </p>
              </center>
             
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Experience:</strong> {job.experience}</p>
              <p>{job.description}</p>
              <Link to={`/job-details/${job.id}`}>
                   <center><Button variant="success">Apply Now</Button></center> 
             </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
<center>
    <Link to ="findjob">
      <Button className="mt-3 mb-4  custom-button" style={{ fontSize: "1.2rem" }}>
        Browse All Jobs
       </Button>
      </Link>
</center>
    </div>
  );
};

export default ListedJobs;
