// src/components/FallingDrops.js
import React from 'react';
import './FallingDrops.scss'; // Import the CSS file

const FallingDrops = () => (
  <div className="FallingDrops-container">
    {[...Array(100)].map((_, index) => (
      <div
        key={index}
        className="drop"
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${0.5 + Math.random()}s`,
          animationDelay: `-${Math.random() * 1}s`
        }}
      />
    ))}
  </div>
);

export default FallingDrops;
