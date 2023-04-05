import React from 'react';

const GradientText = ({ children }) => {
  return (
    <span
      style={{
        backgroundImage:
          'linear-gradient(247.44deg, #C7F284 13.88%, #00BEF0 99.28%)',
      }}
      className="bg-clip-text text-transparent"
    >
      {children}
    </span>
  );
};

export default GradientText;
