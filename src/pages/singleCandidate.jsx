import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const SingleCandidate = () => {
  const candidateData = [
    {
      id: 1,
      avatar: "https://cdn-icons-png.flaticon.com/128/11498/11498793.png",
      name: 'John Doe',
      location: 'Madhapur, Hyderabad',
      experience: '5 Years',
      skills: 'JavaScript, React, Node.js',
      currentRole: 'Software Engineer',
    },
    {
      id: 2,
      avatar: "https://cdn-icons-png.flaticon.com/128/11498/11498793.png",
      name: 'Jane Smith',
      location: 'Gachibowli, Hyderabad',
      experience: '3 Years',
      skills: 'Project Management, Agile, Scrum',
      currentRole: 'Project Manager',
    },
    {
      id: 3,
      avatar: "https://cdn-icons-png.flaticon.com/128/11498/11498793.png",
      name: 'Alex Johnson',
      location: 'Banjara Hills, Hyderabad',
      experience: '4 Years',
      skills: 'UI/UX Design, Figma, Adobe XD',
      currentRole: 'UI/UX Designer',
    },
    {
      id: 4,
      avatar: "https://cdn-icons-png.flaticon.com/128/11498/11498793.png",
      name: 'Chris Lee',
      location: 'Kukatpally, Hyderabad',
      experience: '6 Years',
      skills: 'Data Analysis, Python, SQL',
      currentRole: 'Data Analyst',
    },
    {
      id: 5,
      avatar: "https://cdn-icons-png.flaticon.com/128/11498/11498793.png",
      name: 'Emma Brown',
      location: 'Jubilee Hills, Hyderabad',
      experience: '2 Years',
      skills: 'Full-Stack Development, JavaScript, MongoDB',
      currentRole: 'Full-Stack Developer',
    },
    {
      id: 6,
      avatar: "https://cdn-icons-png.flaticon.com/128/11498/11498793.png",
      name: 'Michael Green',
      location: 'HiTech City, Hyderabad',
      experience: '3 Years',
      skills: 'Digital Marketing, SEO, Content Writing',
      currentRole: 'Digital Marketing Specialist',
    },
  ];

  const { id } = useParams(); // Extract the candidate's ID from the URL
  const candidate = candidateData.find(candidate => candidate.id === parseInt(id)); // Find the candidate by ID

  if (!candidate) {
    return <p>No candidate found.</p>;
  }

  return (
    <div className="container mt-4">
      <div className="hero1 text-center mb-4">
        <h1>Candidate Details</h1>
      </div>
      <Card>
        <Card.Body>
          <Row>
            <Col md={4} className="text-center">
              <img 
                src={candidate.avatar} 
                alt={candidate.name} 
                className="rounded-circle mb-3" 
                style={{ width: '150px', height: '150px' }}
              />
            </Col>
            <Col md={8}>
              <h2>{candidate.name}</h2>
              <p><FaMapMarkerAlt /> {candidate.location}</p>
              <p><FaBriefcase /> {candidate.currentRole}</p>
              <p><strong>Experience:</strong> {candidate.experience}</p>
              <p><strong>Skills:</strong> {candidate.skills}</p>
              <Button variant="primary">Contact Candidate</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCandidate;
