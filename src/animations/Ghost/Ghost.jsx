import React, { useEffect, useRef } from 'react';
import './Ghost.scss';

const Ghost = () => {
  const ghostRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      ghostRef.current.forEach((ghost, index) => {
        const delay = index / 20;
        setTimeout(() => {
          if (ghost) {
            ghost.style.left = `${event.clientX}px`;
            ghost.style.top = `${event.clientY}px`;
          }
        }, delay * 1000);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="speedcapture">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="ghost face" ref={(el) => (ghostRef.current[index] = el)}>
          <div className="arms">
            <div className="arm"></div>
            <div className="arm"></div>
          </div>
          <div className="inner">
            <div className="mouth"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ghost;
