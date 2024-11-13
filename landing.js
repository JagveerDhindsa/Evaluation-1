import React from 'react';

const SmoothScroll = () => {
  const handleClick = (event, hash) => {
    if (hash !== "") {
      event.preventDefault();
      const element = document.querySelector(hash);
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
      window.location.hash = hash;
    }
  };

  return (
    <div>
      <a href="#section1" onClick={(e) => handleClick(e, '#section1')}>Go to Section 1</a>
      <a href="#section2" onClick={(e) => handleClick(e, '#section2')}>Go to Section 2</a>
      
      {/* Example sections to scroll to */}
      <div id="section1" style={{ height: '100vh', backgroundColor: 'lightblue' }}>Section 1</div>
      <div id="section2" style={{ height: '100vh', backgroundColor: 'lightgreen' }}>Section 2</div>
    </div>
  );
};

export default SmoothScroll;
