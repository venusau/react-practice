import React, { useState, useEffect } from 'react';

function DigitalClock() {
  // Define state to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date());
  console.log(new Date());
  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <h1>Digital Clock</h1> */}
      <p>Time: {currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default DigitalClock;
