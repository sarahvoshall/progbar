import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 20);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  }, []);

  return (
    <div className="progress-bar">
      {progress < 100 && (
        <div
          className="progress"
          style={{ width: progress + "%" }}
        ></div>
      )}
      {progress === 100 && (
        <div className="progress-complete">Loading complete</div>
      )}
    </div>
  );
};

export default ProgressBar;
