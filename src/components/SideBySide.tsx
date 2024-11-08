import React from 'react';

function SideBySide({ imageUrl, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <img src={imageUrl} alt="side by side" />
      </div>
      <div style={{ flex: 2 }}>
        {children}
      </div>
    </div>
  );
}

export default SideBySide;
