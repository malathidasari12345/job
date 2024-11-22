import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button,Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaBookmark, FaEnvelope, FaPhoneAlt, FaDollarSign, FaCalendarAlt, FaBriefcase, FaPhone, FaMoneyBillAlt, FaClock } from 'react-icons/fa';
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.avif";


const jobData = [
  {
    id: 1,
    companyLogo: logo1,
    role: 'Software Engineer',
    location: 'Madhapur, Hyderabad',
    time: '2 days ago',
    salary: '$60,000 - $100,000',
    experience: 'Freshers',
    companyName: 'Tech Innovators Inc.',
    contactEmail: 'hr@techsolutions.com',
    contactPhone: '+1 234 567 890',
    description: `We are seeking a passionate and skilled Software Engineer to join our growing team of innovative professionals. 
    You will play a pivotal role in developing and maintaining high-performance software applications that are at the core of our 
    business operations. As a Software Engineer, you will have the opportunity to work on cutting-edge technologies and build scalable 
    systems that impact millions of users. You will collaborate with cross-functional teams including designers, product managers, 
    and quality assurance professionals to ensure the delivery of reliable, well-architected, and efficient solutions. A strong knowledge 
    of programming languages such as Java, C++, or Python, as well as a solid understanding of software engineering principles, is required. 
    If you thrive in a dynamic, fast-paced environment and are eager to contribute to the growth of an innovative company, this role is for you.`,
  },
  {
    id: 2,
    companyLogo: logo2,
    role: 'Project Manager',
    location: 'Gachibowli, Hyderabad',
    time: '3 days ago',
    salary: '$50,000 - $80,000',
    experience: '3+ Years',
    companyName: 'Green Earth Solutions',
    contactEmail: 'hr@techsolutions.com',
    contactPhone: '+1 234 567 890',
    description: `We are offering an exciting opportunity for a strategic and driven Product Manager to lead our product 
    development efforts from inception to launch. As a Product Manager, you will be responsible for defining the product roadmap, 
    prioritizing features, and collaborating with cross-functional teams including engineering, design, and marketing to ensure the 
    successful delivery of high-quality products. You will be expected to understand customer needs, translate them into clear 
    product specifications, and drive the product vision to meet the strategic objectives of the company. The ideal candidate will 
    possess a strong background in product management, with experience in the full product lifecycle and the ability to manage 
    competing priorities effectively. A proven track record of successful product launches and strong leadership skills is essential.`,
  },
  {
    id: 3,
    companyLogo: logo1,
    role: 'UI/UX Designer',
    location: 'Banjara Hills, Hyderabad',
    time: '4 days ago',
    salary: '$45,000 - $75,000',
    experience: '1+ Year',
    companyName: 'Creative Minds Studio',
    contactEmail: 'hr@techsolutions.com',
    contactPhone: '+1 234 567 890',
    description: `We are looking for a highly creative and detail-oriented UI/UX Designer to join our dynamic design team. 
    In this role, you will be responsible for creating visually appealing, user-friendly interfaces for web and mobile platforms. 
    You’ll collaborate with product managers and developers to ensure that designs are implemented accurately and align with the 
    overall product vision. Your work will have a direct impact on the user experience, so it is important that you are able to 
    translate complex user needs into simple, elegant, and functional design solutions. Experience with user research, wireframing, 
    prototyping, and a solid understanding of design principles such as color theory, typography, and layout are essential. If you’re 
    passionate about creating intuitive designs and are looking for a collaborative, creative work environment, we would love to have you on board.`,
  },
  {
    id: 4,
    companyLogo: logo2,
    role: 'Data Analyst',
    location: 'Kukatpally, Hyderabad',
    time: '1 week ago',
    salary: '$60,000 - $100,000',
    experience: '3+ Years',
    companyName: 'Data Analytics Corp.',
    contactEmail: 'hr@techsolutions.com',
    contactPhone: '+1 234 567 890',
    description: `We are seeking a talented and experienced Data Scientist to join our growing team of analytics professionals. 
    In this role, you will be responsible for analyzing large datasets, building machine learning models, and providing actionable 
    insights to help drive key business decisions. You will work closely with business leaders and product teams to identify 
    opportunities for data-driven solutions. Proficiency in programming languages such as Python or R, knowledge of statistical 
    analysis methods, and experience with machine learning frameworks like TensorFlow or Scikit-learn are required. You will also 
    be expected to communicate complex data insights to non-technical stakeholders in a clear and actionable way. If you are passionate 
    about solving complex problems with data and want to make a significant impact on business outcomes, we would love to hear from you.`,
  },
  {
    id: 5,
    companyLogo: logo1,
    role: 'Full-Stack Developer',
    location: 'Jubilee Hills, Hyderabad',
    time: '1 week ago',
    salary: '$60,000 - $95,000',
    experience: '1+ Year',
    companyName: 'Rapid Dev Solutions',
    contactEmail: 'hr@techsolutions.com',
    contactPhone: '+1 234 567 890',
    description: `We are looking for an experienced and passionate Frontend Developer to join our team and help build 
    intuitive, responsive web applications. You will work closely with product managers and designers to implement elegant 
    user interfaces and ensure that our products deliver seamless experiences across a wide range of devices. The ideal candidate 
    will have a deep understanding of HTML, CSS, and JavaScript, with experience using modern frameworks like React.js or Angular. 
    You will also need to be proficient in front-end tooling such as Webpack, Babel, and version control systems like Git. This role 
    offers an opportunity to work on exciting projects in a collaborative environment with a focus on continuous improvement and 
    professional development.`,
  },
  {
    id: 6,
    companyLogo: logo2,
    role: 'Digital Marketing Specialist',
    location: 'HiTech City, Hyderabad',
    time: '2 days ago',
    salary: '$45,000 - $75,000',
    experience: '3+ years',
    companyName: 'Bright Future Marketing',
    contactEmail: 'hr@techsolutions.com',
    contactPhone: '+1 234 567 890',
    description: `We are seeking a dynamic and creative Marketing Manager to lead our marketing efforts and help promote our 
    brand across multiple channels. In this role, you will develop and execute marketing strategies, campaigns, and initiatives 
    aimed at increasing brand awareness, generating leads, and driving customer engagement. You will oversee the marketing team and 
    collaborate with sales, product, and design teams to ensure a cohesive and consistent brand message. The ideal candidate will 
    have extensive experience in digital marketing, including SEO, content creation, and social media management. Strong leadership 
    skills, the ability to think strategically, and a data-driven approach are essential to success in this role.`,
  }
];
const SingleJob = () => {
  const { id } = useParams();
  const jobId = parseInt(id, 10);
  const job = jobData.find((job) => job.id === jobId);

  if (!job) {
    return <h2 style={{fontSize:"4rem", textAlign:"center"}}>Job not found</h2>;
  }
  const note = () => {
    alert("please login to apply this job");
  };

  return (
    <div style={{ backgroundColor: '#f2f2f2', padding: '20px', minHeight: '100vh' }}>
      <div className="hero1 text-center mb-4">
        <h1>Job Details</h1>
      </div>
      <br></br><br></br>
      
      <div className="job-details-container d-flex justify-content-center">
        <div className="d-flex flex-column flex-md-row w-100 justify-content-around">
          {/* Left Column */}
          <div className="d-flex flex-column w-100 pe-md-3">
      
            <Card className="mb-4 shadow-sm rounded-3 border-0">
              <Card.Body className="d-flex justify-content-between align-items-center p-3">
                <div className="d-flex align-items-center">
                  <img 
                    src={job.companyLogo} 
                    alt="Company Logo" 
                    className="company-logo mb-3 rounded-circle shadow-sm" 
                    height={80} 
                    width={80} 
                    style={{ border: '2px solid #28a745', padding: '5px' }}
                  />
                  &nbsp; &nbsp; &nbsp;
                  <div>
                    <h2 className="mb-1">{job.role}</h2>
                    <small className="text-muted">{job.location}</small>
                  </div>
                </div>
                <Button variant="success" size="md" className="me-2" onClick={note}>
                  Apply Now
                </Button>
                <div>
                  <FaBookmark className="bookmark-icon text-secondary" size={20} />
                </div>
              </Card.Body>
            </Card>

            {/* Job Description Card */}
            <Card className="mb-4 shadow-sm border-0" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
              <Card.Body>
                <h2 className="mb-3" style={{ fontWeight: 'bold' }}>Job Description</h2>
                <p className="text-muted" style={{ lineHeight: '1.6', fontSize: '15px' }}>{job.description}</p>
              </Card.Body>
            </Card>

          </div>

          {/* Right Column */}
          <div className="d-flex flex-column w-50 ps-md-3">
            {/* Job Overview Card */}
            <Card className="mb-4 shadow-sm border-0" style={{ borderRadius: '10px' }}>
              <Card.Body>
                <h2 className=" mb-4" style={{ fontWeight: 'bold' }}>Job Overview</h2>
                
                {/* Salary Section */}
                <div className="d-flex align-items-center mb-3">
                  <div 
                    className="icon-container me-3" 
                    style={{
                      backgroundColor: '#e6f4ea', 
                      color: '#28a745', 
                      border: '1px solid #28a745', 
                      borderRadius: '5%', 
                      padding: '8px'
                    }}
                  >
                    <FaMoneyBillAlt size={20}/>
                  </div>
                  <p className="mb-0"><strong>Salary:</strong> {job.salary}</p>
                </div>
                
                {/* Experience Section */}
                <div className="d-flex align-items-center mb-3">
                  <div 
                    className="icon-container me-3" 
                    style={{
                      backgroundColor: '#e6f4ea', 
                      color: '#28a745', 
                      border: '1px solid #28a745', 
                      borderRadius: '5%', 
                      padding: '8px'
                    }}
                  >
                    <FaBriefcase size={20} />
                  </div>
                  <p className="mb-0"><strong>Experience:</strong> {job.experience}</p>
                </div>
                
                {/* Posted Time Section */}
                <div className="d-flex align-items-center mb-3">
                  <div 
                    className="icon-container me-3" 
                    style={{
                      backgroundColor: '#e6f4ea', 
                      color: '#28a745', 
                      border: '1px solid #28a745', 
                      borderRadius: '5%', 
                      padding: '8px'
                    }}
                  >
                    <FaClock size={20}/>
                  </div>
                  <p className="mb-0"><strong>Posted:</strong> {job.time}</p>
                </div>
                
                {/* Location Section */}
                <div className="d-flex align-items-center">
                  <div 
                    className="icon-container me-3" 
                    style={{
                      backgroundColor: '#e6f4ea', 
                      color: '#28a745', 
                      border: '1px solid #28a745', 
                      borderRadius: '5%', 
                      padding: '8px'
                    }}
                  >
                    <FaMapMarkerAlt size={20}/>
                  </div>
                  <p className="mb-0"><strong>Location:</strong> {job.location}</p>
                </div>
                
              </Card.Body>
            </Card>

            {/* Company Information Card */}
            <Card className="mb-4 shadow-sm border-0" style={{ borderRadius: '10px' }}>
              <Card.Body className="text-center">
                {/* Company Logo */}
                <img 
                  src={job.companyLogo} 
                  alt="Company Logo" 
                  className="company-logo mb-3 rounded-circle shadow-sm" 
                  height={80} 
                  width={80} 
                  style={{ border: '2px solid #28a745', padding: '5px' }}
                />

                {/* Role and Location */}
                <h5 className="mb-3" style={{ fontWeight: 'bold' }}>
                  {job.companyName}
                </h5>
                <small>
                  <h5 className=" text-muted">
                    {job.location}
                  </h5>
                </small> 

                {/* Contact Info */}
                <div>
                  {/* Email Section */}
                  <div 
                    className="d-flex align-items-center" 
                    style={{ padding: '8px 12px' }}
                  >
                    <FaEnvelope className="me-2" style={{ fontSize: '1.2em', color: '#28a745' }} />
                    <span>{job.contactEmail || "example@company.com"}</span>
                  </div>

                  {/* Phone Section */}
                  <div 
                    className="d-flex align-items-center" 
                    style={{ padding: '8px 12px' }}
                  >
                    <FaPhone className="me-2" style={{ fontSize: '1.2em', color: '#28a745' }} />
                    <span>{job.contactPhone || "123-456-7890"}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;

