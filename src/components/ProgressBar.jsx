import React, { useEffect, useState } from "react";

function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearTimeout(interval);
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
}

export default ProgressBar;
