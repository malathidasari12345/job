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
    location: 'Madhapur, Hyd',
    salary: '$800 - $1000',
    experience: '3+ years',
    description: 'Looking for a passionate Software Engineer to join our team.',
  },
  {
    id: 2,
    companyLogo: logo2,
    role: 'Product Manager',
    location: 'Madhapur, Hyd',
    salary: '$900 - $1200',
    experience: '5+ years',
    description: 'Exciting opportunity for a Product Manager to lead the team.',
  },
  {
    id: 3,
    companyLogo: logo1,
    role: 'UI/UX Designer',
    location: 'Madhapur, Hyd',
    salary: '$7000 - $9000',
    experience: '2+ years',
    description: 'Join our design team to craft beautiful and user-friendly digital products.',
  },
  {
    id: 4,
    companyLogo: logo2,
    role: 'Data Scientist',
    location: 'Madhapur, Hyd',
    salary: '$1000 - $13000',
    experience: '4+ years',
    description: 'We are looking for a Data Scientist to analyze and interpret complex data.',
  },
  {
    id: 5,
    companyLogo: logo1,
    role: 'Frontend Developer',
    location: 'Madhapur, Hyd',
    salary: '$7500- $9500',
    experience: '3+ years',
    description: 'Passionate Frontend Developer needed to build dynamic, responsive websites.',
  },
  {
    id: 6,
    companyLogo: logo2,
    role: 'Marketing Manager',
    location: 'Madhapur, Hyd',
    salary: '$8000 - $11000',
    experience: '5+ years',
    description: 'Looking for a Marketing Manager to lead innovative campaigns and strategies.',
  },
];

const ListedJobs = () => {
  return (
    <div className="listed-jobs">
      <h1 className='section-title'>Listed Jobs</h1>
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
    </div>
  );
};

export default ListedJobs;
