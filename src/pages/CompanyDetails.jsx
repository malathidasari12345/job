import React from 'react';
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.avif";
import { Card, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaBookmark,  FaBriefcase,  FaMoneyBillAlt, FaClock, FaIndustry } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const CompanyDetails = () => {
    const companyData = [
        {
          id: 1,
          companyLogo: logo1,
          name: 'Tech Innovators Inc.',
          location: 'Madhapur, Hyderabad',
          industry: 'Technology',
          size: '500-1000 Employees',
          revenue: '$10M - $20M',
          description: 'A leading tech company specializing in AI and cloud solutions. Focused on innovation and cutting-edge technology.',
          jobs: [
            {
              id: 1,
              title: 'Software Engineer',
              salary: '$60,000 - $100,000',
              posted: '2 days ago',
            }
          ],
        },
        {
          id: 2,
          companyLogo: logo2,
          name: 'Green Earth Solutions',
          location: 'Gachibowli, Hyderabad',
          industry: 'Environmental Technology',
          size: '200-500 Employees',
          revenue: '$5M - $15M',
          description: 'Pioneering sustainable technology with eco-friendly solutions and a strong commitment to the environment.',
          jobs: [
            {
              id: 2,
              title: 'Project Manager',
              salary: '$50,000 - $80,000',
              posted: '3 days ago',
            }
          ],
        },
        {
          id: 3,
          companyLogo: logo1,
          name: 'Creative Minds Studio',
          location: 'Banjara Hills, Hyderabad',
          industry: 'Design & Development',
          size: '50-200 Employees',
          revenue: '$2M - $8M',
          description: 'A digital agency that specializes in UI/UX design, branding, and web development for clients globally.',
          jobs: [
            {
              id: 3,
              title: 'UI/UX Designer',
              salary: '$45,000 - $75,000',
              posted: '4 days ago',
            },
          ],
        },
        {
          id: 4,
          companyLogo: logo2,
          name: 'Data Analytics Corp.',
          location: 'Kukatpally, Hyderabad',
          industry: 'Data Analytics',
          size: '1000+ Employees',
          revenue: '$20M - $50M',
          description: 'Experts in big data analytics, providing insights and solutions to Fortune 500 companies.',
          jobs: [
            {
              id: 4,
              title: 'Data Analyst',
              salary: '$60,000 - $100,000',
              posted: '1 week ago',
            },
        
          ],
        },
        {
          id: 5,
          companyLogo: logo1,
          name: 'Rapid Dev Solutions',
          location: 'Jubilee Hills, Hyderabad',
          industry: 'Software Development',
          size: '10-50 Employees',
          revenue: '$1M - $5M',
          description: 'An agile software development company that delivers scalable and responsive web applications.',
          jobs: [
            {
              id: 5,
              title: 'Full-Stack Developer',
              salary: '$60,000 - $95,000',
              posted: '1 week ago',
            }
          ],
        },
        {
          id: 6,
          companyLogo: logo2,
          name: 'Bright Future Marketing',
          location: 'HiTech City, Hyderabad',
          industry: 'Marketing',
          size: '500-800 Employees',
          revenue: '$15M - $25M',
          description: 'A marketing agency focusing on digital campaigns, SEO, and brand management for startups and established businesses.',
          jobs: [
            {
              id: 6,
              title: 'Digital Marketing Specialist',
              salary: '$45,000 - $75,000',
              posted: '2 days ago',
            },
          ],
        },
      ];
      
      

  const { id } = useParams();
  const companyId = parseInt(id, 10);
  const company = companyData.find((company) => company.id === companyId);

  if (!company) {
    return <h2 style={{fontSize:"2rem", textAlign:"center"}}>Company not found</h2>;
  }

  return (
    <>
  
    <div style={{ backgroundColor: '#f2f2f2', padding: '20px', minHeight: '100vh' }}>
      <div className="hero1 text-center mb-4">
        <h1>Company Details</h1>
      </div>
      <div className="job-details-container d-flex justify-content-center">
        <div className="d-flex flex-column flex-md-row w-100 justify-content-around">
          {/* Left Column */}
          <div className="d-flex flex-column w-100 pe-md-3">
           
     <Card className="mb-4 shadow-sm rounded-3 border-0" style={{ position: 'relative' }}>
          <Card.Body className="d-flex justify-content-between align-items-center p-3">
      <div className="d-flex align-items-center">
      <img 
        src={company.companyLogo} 
        alt="Company Logo" 
        className="company-logo mb-3 rounded-circle shadow-sm" 
        height={80} 
        width={80} 
        style={{ border: '2px solid #28a745', padding: '5px' }}
      />
      &nbsp; &nbsp; &nbsp;
      <div>
        <h2 className="mb-1">{company.name}</h2>
        <small className="text-muted">{company.location}</small>
      </div>
    </div>
    {/* Bookmark icon positioned in the top-right corner */}
    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
      <FaBookmark className="bookmark-icon text-secondary" size={20} />
    </div>
  </Card.Body>
</Card>


            {/* Company Description Card */}
            <Card className="mb-4 shadow-sm border-0" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
              <Card.Body>
                <h2 className="mb-3" style={{ fontWeight: 'bold' }}>Company Description</h2>
                <p className="text-muted" style={{ lineHeight: '1.6', fontSize: '15px' }}>{company.description}</p>
              </Card.Body>
            </Card>
          </div>

          {/* Right Column */}
          <div className="d-flex flex-column w-50 ps-md-3">
            <Card className="mb-4 shadow-sm border-0" style={{ borderRadius: '10px' }}>
              <Card.Body>
                <h2 className="mb-4" style={{ fontWeight: 'bold' }}>Company Overview</h2>
                <div className="d-flex align-items-center mb-3">
                  <FaMoneyBillAlt className="me-3" style={{ color: '#28a745', fontSize: '1.5rem' }} />
                  <p className="mb-0"><strong>Revenue:</strong> {company.revenue}</p>
                </div>
                <div className="d-flex align-items-center mb-3">
                 <FaIndustry className="me-3" style={{ color: '#28a745', fontSize: '1.5rem' }} />
                     <p className="mb-0"><strong>Industry:</strong> {company.industry}</p>
               </div>

                <div className="d-flex align-items-center mb-3">
                  <FaBriefcase className="me-3" style={{ color: '#28a745', fontSize: '1.5rem' }} />
                  <p className="mb-0"><strong>Size:</strong> {company.size}</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <FaMapMarkerAlt className="me-3" style={{ color: '#28a745', fontSize: '1.5rem' }} />
                  <p className="mb-0"><strong>Location:</strong> {company.location}</p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
    {/* jobs related */}
    <h5 className="text-center mt-5 mb-4">Open Job Positions</h5>
    <div className="d-flex flex-wrap justify-content-center gap-5">
    {company.jobs.map((job, index) => (
        <Card 
            key={index} 
            className="mb-4 mx-3 p-4 shadow-lg rounded-xl w-72 hover:shadow-2xl transition-all duration-300"
            style={{ width: '18rem' }}
        >
            <Card.Body>
                <h5 className="mb-3 font-bold text-xl text-gray-800">{job.title}</h5>
                <p className="text-muted mb-3 text-lg"><strong>Salary:</strong> {job.salary}</p>
                <div className="d-flex align-items-center mb-3">
                    <FaClock className="me-2 text-gray-500" style={{ fontSize: '1.2rem' }} />
                    <p className="mb-0 text-gray-600 text-sm"><strong>Posted:</strong> {job.posted}</p>
                </div>
                <div className="mt-4">
                    <Link to={`/job-details/${job.id}`}>
                        <Button variant="success" className="w-full py-2 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-md">
                            Apply Now
                        </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    ))}
</div>


    </>
  );
}

export default CompanyDetails;
