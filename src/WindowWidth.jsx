import React, { useState, useEffect } from 'react';

function WindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to update width on resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div>
      <p>Current window width: {windowWidth}px</p>
     
    </div>
  );
}

export default WindowWidth;
