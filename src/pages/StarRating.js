import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  
  
  for (let i = 1; i <= fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-warning" />);
  }
  
  
  if (halfStar) {
    stars.push(<FontAwesomeIcon key="half" icon={faStar} className="text-warning" />);
  }
  
  
  for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
    stars.push(<FontAwesomeIcon key={i + 1} icon={faStar} className="text-muted" />);
  }

  return <div className="d-flex align-items-center">{stars}</div>;
};

export default StarRating;
