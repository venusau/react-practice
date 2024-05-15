import React, { useState, useEffect } from 'react';

function DigitalClock() {
  // Define state to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Format the current time as HH:MM:SS
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <h1>Digital Clock</h1>
      <p>{formattedTime}</p>
    </div>
  );
}

export default DigitalClock;
