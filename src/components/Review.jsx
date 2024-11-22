import React, { useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../styles/review.css";

const CustomerReview = () => {
  const reviews = [
    {
      id: 1,
      name: 'Alice Johnson',
      image: 'https://cdn-icons-png.flaticon.com/128/11498/11498793.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Bob Smith',
      image: 'https://cdn-icons-png.flaticon.com/128/11498/11498793.png',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      image: 'https://cdn-icons-png.flaticon.com/128/11498/11498793.png',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    }
  ];

  // State to track the current index of the displayed card
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the left arrow click
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  // Function to handle the right arrow click
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container mt-5">
      <h1 className="section-title">Reviews</h1>
      <div className="d-flex justify-content-center align-items-center mb-4">
        {/* Left Arrow */}
        <div className="slider-btn" onClick={handlePrevClick}>
          <FaArrowLeft size={20} />
        </div>

        {/* Review Container */}
        <div className="d-flex justify-content-center" style={{ width: '100%' }}>
          <div className="review-container">
            {/* Display only the current review based on the index */}
            <div key={reviews[currentIndex].id} className="card-container">
              <Card className="review-card text-center">
                <Card.Body>
                  <Image
                    src={reviews[currentIndex].image}
                    roundedCircle
                    className="review-image"
                  />
                  <Card.Title className="review-name">{reviews[currentIndex].name}</Card.Title>
                  <Card.Text className="review-description">{reviews[currentIndex].description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <div className="slider-btn" onClick={handleNextClick}>
          <FaArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
