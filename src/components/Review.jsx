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


  return (
    <div className="container mt-5">
     <h1 className="section-title">Reviews</h1>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <div
          className="slider-btn"
        >
          <FaArrowLeft size={20} />
        </div>

        <div className="d-flex justify-content-center" style={{ width: '100%' }}>
          <div className="review-container">
            {reviews.map((review) => (  
              <div key={review.id} className="card-container">
                <Card className="review-card text-center">
                  <Card.Body>
                    <Image
                      src={review.image}
                      roundedCircle
                      className="review-image"
                    />
                    <Card.Title className="review-name">{review.name}</Card.Title>
                    <Card.Text className="review-description">{review.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div
          className="slider-btn"
        >
          <FaArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
