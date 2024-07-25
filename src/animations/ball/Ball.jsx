// Ball.js
import React, { useRef, useEffect } from 'react';
import './styles.css';

const Ball = () => {
  const ballRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ballRef.current) {
        const scrollPosition = window.scrollY;
        ballRef.current.style.transform = `translateY(${scrollPosition}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="ball" ref={ballRef}>
      <div className="ball-content"></div>
    </div>
  );
};

export default Ball;
