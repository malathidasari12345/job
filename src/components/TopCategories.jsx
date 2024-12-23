import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { FaLaptop, FaCode, FaDatabase, FaPaintBrush, FaBullhorn, FaUsers, FaChartLine, FaCogs } from 'react-icons/fa';
import '../styles/top.css'; 
import { Link } from 'react-router-dom';

const TopCategories = () => {
    const categories = [
        {
          id: 1,
          icon: <FaLaptop size={40} />,
          title: 'Technology',
          description: 'Explore the latest in technology and IT jobs.',
        },
        {
          id: 2,
          icon: <FaCode size={40} />,
          title: 'Development',
          description: 'Software development, web development, and more.',
        },
        {
          id: 3,
          icon: <FaDatabase size={40} />,
          title: 'Data Science',
          description: 'Data analyst, data engineer, and machine learning roles.',
        },
        {
          id: 4,
          icon: <FaPaintBrush size={40} />,
          title: 'Design',
          description: 'UI/UX design, graphic design, and creative roles.',
        },
        {
          id: 5,
          icon: <FaBullhorn size={40} />,
          title: 'Marketing',
          description: 'Digital marketing, SEO, content marketing, and more.',
        },
        {
          id: 6,
          icon: <FaUsers size={40} />,
          title: 'Human Resources',
          description: 'HR management, recruitment, and employee relations.',
        },
        {
          id: 7,
          icon: <FaChartLine size={40} />,
          title: 'Finance',
          description: 'Accounting, investment banking, financial analysis, and more.',
        },
        {
          id: 8,
          icon: <FaCogs size={40} />,
          title: 'Engineering',
          description: 'Mechanical, civil, electrical, and chemical engineering roles.',
        },
      ];
      
  return (
    <div className="top-categories">
      <center>
        {/* Section subtitle */}
        <p style={{ color: "#28a745", fontWeight: "bold", fontStyle: "italic", borderBottom: "none" }}>Popular Categories</p>
        
        {/* Section title */}
        <h1 className="section-title" style={{ borderBottom: "none" }}>Popular Job Sectors</h1>
      </center>

      {/* Categories cards */}
      <Row>
        {categories.map((category) => (
          <Col md={6} lg={3} key={category.id}>
            <Link to="/findjob" className="no-link-style">
               <Card className="category-card">
                 <Card.Body className="text-center">
                    <div className="category-icon">{category.icon}</div>
                        <Card.Title>{category.title}</Card.Title>
                         <Card.Text>{category.description}</Card.Text>
                       </Card.Body>
               </Card>
             </Link>
          </Col>
        ))}
      </Row>
       {/* Browse button */}
       <center>
      <Link to ="all-sectors">
      <Button className="mt-3 mb-4  custom-button" style={{ fontSize: "1.2rem" }}>
        Browse All Categories
       </Button>
      </Link>
 
</center>


      
    </div>
  );
};

export default TopCategories;
