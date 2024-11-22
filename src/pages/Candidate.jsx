import React, { useState } from "react";
import { Form, InputGroup, Row, Col, Card, Button } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Candidate = () => {
  const candidateData = [
    {
      id: 1,
      avatar: "https://cdn-icons-png.flaticon.com/128/11498/11498793.png",
      name: "John Doe",
      location: "Madhapur, Hyderabad",
      experience: "5 Years",
      skills: "JavaScript, React, Node.js",
      currentRole: "Software Engineer",
    },
    {
      id: 2,
      avatar: "https://cdn-icons-png.flaticon.com/128/11498/11498793.png",
      name: "Jane Smith",
      location: "Gachibowli, Hyderabad",
      experience: "3 Years",
      skills: "Project Management",
      currentRole: "Project Manager",
    },
    {
      id: 3,
      avatar: "https://cdn-icons-png.flaticon.com/128/11498/11498793.png",
      name: "Alex Johnson",
      location: "Banjara Hills, Hyderabad",
      experience: "4 Years",
      skills: "UI/UX Design, Figma, Adobe XD",
      currentRole: "UI/UX Designer",
    },
    {
      id: 4,
      avatar: "https://cdn-icons-png.flaticon.com/128/11498/11498793.png",
      name: "Chris Lee",
      location: "Kukatpally, Hyderabad",
      experience: "6 Years",
      skills: "Data Analysis, Python, SQL",
      currentRole: "Data Analyst",
    },
    {
      id: 5,
      avatar: "https://cdn-icons-png.flaticon.com/128/11498/11498793.png",
      name: "Emma Brown",
      location: "Jubilee Hills, Hyderabad",
      experience: "2 Years",
      skills: "Full-Stack Development, JavaScript, MongoDB",
      currentRole: "Full-Stack Developer",
    },
    {
      id: 6,
      avatar: "https://cdn-icons-png.flaticon.com/128/11498/11498793.png",
      name: "Michael Green",
      location: "HiTech City, Hyderabad",
      experience: "3 Years",
      skills: "Digital Marketing, SEO, Content Writing",
      currentRole: "Digital Marketing Specialist",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");

  const filteredCandidates = candidateData.filter((candidate) => {
    const matchesSearch = candidate.currentRole
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSkill = selectedSkill
      ? candidate.skills.toLowerCase().includes(selectedSkill.toLowerCase())
      : true;
    const matchesExperience = selectedExperience
      ? (selectedExperience === "0-2 Years" &&
          candidate.experience === "2 Years") ||
        (selectedExperience === "2-5 Years" &&
          (candidate.experience === "3 Years" ||
            candidate.experience === "4 Years" ||
            candidate.experience === "5 Years")) ||
        (selectedExperience === "5-10 Years" &&
          (candidate.experience === "6 Years" ||
            candidate.experience === "7 Years" ||
            candidate.experience === "8 Years" ||
            candidate.experience === "9 Years" ||
            candidate.experience === "10 Years")) ||
        (selectedExperience === "10+ Years" &&
          candidate.experience.includes("10+"))
      : true;

    return matchesSearch && matchesSkill && matchesExperience;
  });
  const note = () => {
    alert("please login to Upload Your Profile");
  };
  return (
    <>
      <div className="hero1 text-center mb-4">
        <h1>Candidate List</h1>
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
                    <Form.Control
                      type="text"
                      placeholder="search by Role"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                      style={{ padding: "15px" }}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <Form.Select
                    className="text-muted"
                    value={selectedSkill}
                    onChange={(e) => setSelectedSkill(e.target.value)}
                    style={{ padding: "15px" }}
                  >
                    <option>Skills</option>
                    <option>JavaScript</option>
                    <option>React</option>
                    <option>Node.js</option>
                    <option>Project Management</option>
                    <option>Agile</option>
                    <option>Scrum</option>
                    <option>UI/UX Design</option>
                    <option>Figma</option>
                    <option>Adobe XD</option>
                    <option>Data Analysis</option>
                    <option>Python</option>
                    <option>SQL</option>
                    <option>Full-Stack Development</option>
                    <option>MongoDB</option>
                    <option>Digital Marketing</option>
                    <option>SEO</option>
                    <option>Content Writing</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col xs={12}>
                  <Form.Select
                    className="text-muted"
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    style={{ padding: "15px" }}
                  >
                    <option>Experience Level</option>
                    <option>0-2 Years</option>
                    <option>2-5 Years</option>
                    <option>5-10 Years</option>
                    <option>10+ Years</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form>
          </Col>

          {/* Candidate Listings Section */}
          <Col xs={12} md={8}>
            <div className="listed-candidates">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>
                  We have found {" "}
                  <b style={{ color: "#28a745" }}>
                    {filteredCandidates.length}
                  </b>{" "}
                  Candidates
                </span>
                <Button variant="primary" onClick={note}>
                  Add Your Profile
                </Button>
              </div>
              <Row>
                {filteredCandidates.map((candidate) => (
                  <Col xs={12} md={4} key={candidate.id} className="mb-4">
                    <Card className="candidate-card">
                      <Card.Body>
                        <div className="d-flex justify-content-center">
                          <img
                            src={candidate.avatar}
                            alt="Candidate Avatar"
                            className="candidate-avatar"
                            height={80}
                            width={80}
                          />
                        </div>
                        <h5 className="ms-3 text-center">{candidate.name}</h5>
                        <p className="text-muted text-center">
                          <FaMapMarkerAlt className="me-2" />
                          {candidate.location}
                        </p>
                        <p>
                          <strong>Experience:</strong> {candidate.experience}
                        </p>
                        <p>
                          <strong>Skills:</strong> {candidate.skills}
                        </p>
                        <Link
                          to={`/candidate-details/${candidate.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button variant="success" className="d-block mx-auto">
                            See Details
                          </Button>
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

export default Candidate;
