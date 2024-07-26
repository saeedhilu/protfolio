import React from 'react';
import './ShootingStars.scss';

const ShootingStars = () => {
  return (
    <div className="night">
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="shooting_star"></div>
      ))}
    </div>
  );
};

export default ShootingStars;
  