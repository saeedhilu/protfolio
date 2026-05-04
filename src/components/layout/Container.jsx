import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div className={`max-w-5xl mx-auto px-6 sm:px-8 md:px-12 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
