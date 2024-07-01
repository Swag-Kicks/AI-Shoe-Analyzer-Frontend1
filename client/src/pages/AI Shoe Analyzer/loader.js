import React from 'react';

const Loader = ({ text }) => (
  <div className="loader-overlay">
    <div className="loader">
      <div className="loader-content">
        {/* <p>{text}</p> */}
        <div className="spinner"></div>
      </div>
    </div>
  </div>
);

export default Loader;
