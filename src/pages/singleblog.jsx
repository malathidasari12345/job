import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
const SingleBlog = () => {
    const [hover, setHover] = useState(false);
    const blogData = [
        {
          id: 1,
          title: 'How to Start a Career in Frontend Development',
          date: "17 July 2020",
          author: 'Tech Insight Blog',
          location: 'Online',
          image: 'https://media.istockphoto.com/id/613777524/photo/coaching-and-advise-two-business-woman-working-together.jpg?s=612x612&w=0&k=20&c=y-FofzPEAjOKSQgsGnt5NcagxF_jZJAuPvm6Qcnm9ms=',
          description: 'Frontend development is the process of building the user interface (UI) and user experience (UX) of websites and web applications. It involves various technologies such as HTML, CSS, and JavaScript. As a beginner, the first step is to learn HTML, which is the basic structure of web pages. Next, mastering CSS will help you style and design your pages, while JavaScript is essential for making your website interactive. Over time, you can delve into frameworks like React, Angular, or Vue.js, which make building dynamic web apps easier and more efficient. It’s crucial to have a solid understanding of responsive design principles to ensure your website works well on all devices, from desktops to mobile phones. Additionally, knowledge of web performance optimization, accessibility, and search engine optimization (SEO) will help you create user-friendly, high-performance websites that rank well on search engines. This blog will walk you through the essential steps, from setting up your first project to deploying it for the world to see.',
        },
        {
          id: 2,
          title: 'Backend Development: The Core of Every Application',
          date: "8 June 2024",
          author: 'Code World',
          location: 'Tech Blog',
          image: 'https://img.freepik.com/free-vector/app-development-concept-with-flat-design_23-2147850865.jpg?uid=R172868766&ga=GA1.1.448769472.1729244449&semt=ais_hybrid',
          description: 'Backend development plays a crucial role in the functionality of a web application. While the frontend takes care of the user interface and user experience, the backend is responsible for processing data, managing databases, and ensuring everything runs smoothly on the server side. The core of backend development involves working with server-side languages such as Node.js, Python, Java, Ruby, or PHP, and frameworks such as Express.js or Django. A strong understanding of databases, both SQL (e.g., MySQL, PostgreSQL) and NoSQL (e.g., MongoDB), is essential, as they store and manage the data used by applications. APIs (Application Programming Interfaces) are also a key component, as they enable communication between the backend and the frontend. Learning about RESTful API design and GraphQL can help you build more efficient and scalable systems. Security is also a top priority in backend development, as applications need to safeguard sensitive user data. Whether its user authentication, data encryption, or protection from common vulnerabilities, backend developers must implement robust security practices. This blog dives deep into the world of backend development, providing a roadmap for mastering the essential skills and technologies required to build powerful, secure, and scalable applications.',
        },
        {
          id: 3,
          title: 'Full Stack Development: Bridging Frontend and Backend',
          date: "4 May 2000",
          author: 'Web Dev Central',
          location: 'Online',
          image: 'https://img.freepik.com/free-vector/programmers-concept-with-flat-design_23-2147861677.jpg?uid=R172868766&ga=GA1.1.448769472.1729244449&semt=ais_hybrid',
          description: 'Full stack development combines both frontend and backend development into one skill set, allowing developers to build end-to-end applications. Full stack developers are proficient in both the user interface design (frontend) and server-side logic (backend) of a website or application. This requires knowledge of various technologies and frameworks across multiple layers of the application stack. On the frontend, a full stack developer should be familiar with HTML, CSS, JavaScript, and modern frontend frameworks such as React, Angular, or Vue.js. On the backend, they need to understand server-side languages such as Node.js, Python, or Java, along with backend frameworks and tools like Express.js, Django, or Flask. Full stack developers must also be skilled in working with databases (both relational and NoSQL), and they should understand how to manage and manipulate data effectively. In addition to coding skills, full stack developers need to be adept at working with version control systems (such as Git), collaborating with teams, and deploying applications using cloud platforms like AWS, Heroku, or DigitalOcean. Full stack development provides flexibility and versatility, making it an attractive career option for those who want to have a broad skill set and work on every aspect of a web application. This guide will explore the journey of becoming a full stack developer, from learning the basics to building complex, data-driven applications.',
        },
      ];
      const { id } = useParams();
      const blog = blogData.find((b) => b.id === parseInt(id));
      if (!blog) {
        return <div>Blog not found</div>;
      }
  return (
    <div>
       <div className="hero1 text-center mb-4">
        <h2 style={{color:"white", fontSize:"2.5rem" ,marginTop:"100px"}}>{blog.title}</h2> 
      </div>
      <Row>
        <Col md={8}>
        <Card style={{ margin: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
  <Card.Img
    variant="top"
    src={blog.image}
    alt={blog.title}
    style={{ width: "100%", height: "300px", objectFit: "cover" }}
  />
  <Card.Body style={{ padding: "20px", textAlign: "left" }}>
    <Card.Title style={{ fontSize: "1.8rem", color: "#333" }}>{blog.title}</Card.Title>
    <Card.Text style={{ fontSize: "0.9rem", color: "#777" }}>
      <strong>Published on:</strong> {blog.date}
    </Card.Text>
    <Card.Text style={{ fontSize: "0.9rem", color: "#555" }}>
      <strong>Author:</strong> {blog.author}
    </Card.Text>
    <Card.Text style={{ fontSize: "0.9rem", color: "#555" }}>
      <strong>Location:</strong> {blog.location}
    </Card.Text>
    <Card.Text style={{ fontSize: "1rem", color: "#444", lineHeight: "1.5" }}>
      <strong>Description:</strong> {blog.description}
    </Card.Text>
  </Card.Body>
  </Card>
</Col>
{/* latest */}
 <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h1 className="mb-4" style={{ fontSize: "1.5rem", color: "#444" }}>Our Latest Blogs</h1>
              {blogData.map((blog) => (
                <Card key={blog.id} className="mb-3" style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                  <Card.Img
                    variant="top"
                    src={blog.image}
                    alt={blog.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                  <Link
      to={`/blog/${blog.id}`}
      style={{
        textDecoration: 'none',
        color: hover ? 'green' : '#333',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Card.Title style={{ fontSize: '1rem' }}>{blog.title}</Card.Title>
    </Link>
                    

                    <Card.Text style={{ fontSize: "0.9rem", color: "#777" }}>
                      Published on: {blog.date}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
    </div>
  )
}

export default SingleBlog;
