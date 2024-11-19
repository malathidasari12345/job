import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaLaptop, FaCode, FaDatabase, FaPaintBrush, FaBullhorn, FaUsers, FaChartLine, FaCogs } from 'react-icons/fa';
import "../styles/alljobs.css"
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const JobSectors = () => {
    const categories = [
        {
          id: 1,
          icon: <FaLaptop size={40} />,
          title: 'Technology',
          description: 'Explore the latest in technology and IT jobs.',
          count:3
        },
        {
          id: 2,
          icon: <FaCode size={40} />,
          title: 'Development',
          description: 'Software development, web development, and more.',
          count:9
        },
        {
          id: 3,
          icon: <FaDatabase size={40} />,
          title: 'Data Science',
          description: 'Data analyst, data engineer, and machine learning roles.',
          count:9
        },
        {
          id: 4,
          icon: <FaPaintBrush size={40} />,
          title: 'Design',
          description: 'UI/UX design, graphic design, and creative roles.',
          count:5
        },
        {
          id: 5,
          icon: <FaBullhorn size={40} />,
          title: 'Marketing',
          description: 'Digital marketing, SEO, content marketing, and more.',
          count:0
        },
        {
          id: 6,
          icon: <FaUsers size={40} />,
          title: 'Human Resources',
          description: 'HR management, recruitment, and employee relations.',
          count:7
        },
        {
          id: 7,
          icon: <FaChartLine size={40} />,
          title: 'Finance',
          description: 'Accounting, investment banking, financial analysis, and more.',
          count:4
        },
        {
          id: 8,
          icon: <FaCogs size={40} />,
          title: 'Engineering',
          description: 'Mechanical, civil, electrical, and chemical engineering roles.',
          count:5
        },
      ];
  return (
    <>
    <div className="hero1">
     <h1>All Job Sectors</h1>
    </div>

    <div className="top-categories">
        <center>
        <h1 className="section-title" style={{ borderBottom: "none" }}>All Job Sectors</h1>
      </center>
    <Row>
      {categories.map((category) => (
        <Col md={6} lg={3} key={category.id}>
             <Card className="category-card">
               <Card.Body className="text-center">
                  <div className="category-icon">{category.icon}</div>
                      <Card.Title>{category.title}</Card.Title>
                      <Card.Text>{category.count} jobs</Card.Text>
                       <Card.Text>{category.description}</Card.Text>
                       <Link to="/findjob" style={{color:"#28a745", textDecoration:"none"}}>View all jobs <FaArrowRight />
                       </Link>
                     </Card.Body>
             </Card>
        </Col>
      ))}
    </Row>
  </div>
    </>
    
  )
}

export default JobSectors;
