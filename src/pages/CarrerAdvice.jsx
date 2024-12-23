import React from 'react'
import { Card, Button, Container } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CarrerAdvice = () => {
  const blogData = [
    {
      id: 1,
      title: 'How to Start a Career in Frontend Development',
      date:"17 july 2020",
      author: 'Tech Insight Blog',
      location: 'Online',
      image: 'https://media.istockphoto.com/id/613777524/photo/coaching-and-advise-two-business-woman-working-together.jpg?s=612x612&w=0&k=20&c=y-FofzPEAjOKSQgsGnt5NcagxF_jZJAuPvm6Qcnm9ms=',
      description: 'An overview of the skills and technologies required to become a successful frontend developer, including tips for beginners.',
    },
    {
      id: 2,
      title: 'Backend Development: The Core of Every Application',
      date:"8 june 2024",
      author: 'Code World',
      location: 'Tech Blog',
      image: 'https://img.freepik.com/free-vector/app-development-concept-with-flat-design_23-2147850865.jpg?uid=R172868766&ga=GA1.1.448769472.1729244449&semt=ais_hybrid',
      description: 'Explore the world of backend development, from APIs to databases, and learn why backend skills are crucial in today’s tech landscape.',
    },
    {
      id: 3,
      title: 'Full Stack Development: Bridging Frontend and Backend',
      date:"4 may 2000",
      author: 'Web Dev Central',
      location: 'Online',
      image: 'https://img.freepik.com/free-vector/programmers-concept-with-flat-design_23-2147861677.jpg?uid=R172868766&ga=GA1.1.448769472.1729244449&semt=ais_hybrid',
      description: 'A guide to becoming a full stack developer, covering the essential skills and tools to handle both frontend and backend work.',
    },
  ];
  return (
    <>
    <div className="hero1 text-center mb-4">
        <h1>Career Advice</h1>
      </div>
      {/* cards */}
      <Container className="d-flex flex-wrap justify-content-center gap-4 p-3">
    {blogData.map((blog) => (
      <Card key={blog.id} style={{ width: '22rem' }} className="text-center">
        <div className="d-flex justify-content-center p-3">
          <Card.Img 
            src={blog.image} 
            height={200}
            style={{ border: '1px solid green', borderRadius: '5%', objectFit: 'cover' }}
            alt={`${blog.title} by ${blog.author}`}
          />
        </div>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{blog.author}</Card.Subtitle>
          <Card.Text className="text-muted">{blog.location}</Card.Text>
          <Card.Text>{blog.description}</Card.Text>
          <Link to={`/blog/${blog.id}`} style={{ textDecoration: "none" }}>
  <Button 
    variant="success" 
    style={{ backgroundColor: 'green', borderColor: 'green' }}
  >
    Read More <FaArrowRight size={20} style={{ color: "white" }} />
  </Button>
</Link>

        </Card.Body>
      </Card>
    ))}
  </Container>

    </>
  )
}

export default CarrerAdvice
